export default function ImageLoader({ src, width, quality }) {
    return `https://res.cloudinary.com/${src}?w=${width}&q=${quality || 75}`;
}
