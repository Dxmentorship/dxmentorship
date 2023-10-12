declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"curriculum": {
"community-building.md": {
	id: "community-building.md";
  slug: "community-building";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
"conferences-and-events.md": {
	id: "conferences-and-events.md";
  slug: "conferences-and-events";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
"content-creation.md": {
	id: "content-creation.md";
  slug: "content-creation";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
"dev-marketing-evangelism.md": {
	id: "dev-marketing-evangelism.md";
  slug: "dev-marketing-evangelism";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
"documentation-and-technical-writing.md": {
	id: "documentation-and-technical-writing.md";
  slug: "documentation-and-technical-writing";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
"dx-engineering.md": {
	id: "dx-engineering.md";
  slug: "dx-engineering";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
"metrics-and-value-prop.md": {
	id: "metrics-and-value-prop.md";
  slug: "metrics-and-value-prop";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
"open-source.md": {
	id: "open-source.md";
  slug: "open-source";
  body: string;
  collection: "curriculum";
  data: InferEntrySchema<"curriculum">
} & { render(): Render[".md"] };
};
"faqs": {
"have-more-questions.md": {
	id: "have-more-questions.md";
  slug: "have-more-questions";
  body: string;
  collection: "faqs";
  data: InferEntrySchema<"faqs">
} & { render(): Render[".md"] };
"how-do-I-enroll.md": {
	id: "how-do-I-enroll.md";
  slug: "how-do-i-enroll";
  body: string;
  collection: "faqs";
  data: InferEntrySchema<"faqs">
} & { render(): Render[".md"] };
"how-do-I-pay.md": {
	id: "how-do-I-pay.md";
  slug: "how-do-i-pay";
  body: string;
  collection: "faqs";
  data: InferEntrySchema<"faqs">
} & { render(): Render[".md"] };
"what-is-dx-mentorship.md": {
	id: "what-is-dx-mentorship.md";
  slug: "what-is-dx-mentorship";
  body: string;
  collection: "faqs";
  data: InferEntrySchema<"faqs">
} & { render(): Render[".md"] };
};
"graduates": {
"TEMPLATE.md": {
	id: "TEMPLATE.md";
  slug: "template";
  body: string;
  collection: "graduates";
  data: InferEntrySchema<"graduates">
} & { render(): Render[".md"] };
};
"mentees": {
"damilola.md": {
	id: "damilola.md";
  slug: "damilola";
  body: string;
  collection: "mentees";
  data: any
} & { render(): Render[".md"] };
"gloria.md": {
	id: "gloria.md";
  slug: "gloria";
  body: string;
  collection: "mentees";
  data: any
} & { render(): Render[".md"] };
"harpreet.md": {
	id: "harpreet.md";
  slug: "harpreet";
  body: string;
  collection: "mentees";
  data: any
} & { render(): Render[".md"] };
"teri.md": {
	id: "teri.md";
  slug: "teri";
  body: string;
  collection: "mentees";
  data: any
} & { render(): Render[".md"] };
};
"posts": {
"1.md": {
	id: "1.md";
  slug: "1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2.md": {
	id: "2.md";
  slug: "2";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"3.md": {
	id: "3.md";
  slug: "3";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"4.md": {
	id: "4.md";
  slug: "4";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"5.md": {
	id: "5.md";
  slug: "5";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"6.md": {
	id: "6.md";
  slug: "6";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
