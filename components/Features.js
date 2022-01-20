export default function Features() {
  return (
    <section class="pt-20 2xl:pt-40 pb-40 2xl:pb-80 overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="max-w-xl mx-auto mb-16 lg:mb-28 text-center">
          {/* <span class="text-lg font-bold text-blue-500">How it works</span> */}
          <h2 class="mt-6 mb-12 text-6xl font-bold font-heading font-nunito">
            Developer Experience Engineering
          </h2>
          <p class="text-lg text-gray-500 font-source-sans-pro">
            Combining my experience from different companies and the knowledge
            I've gained working in the industry for 5 years, we can create a
            unique experience that prepares you for everything
          </p>
        </div>
        <div class="flex flex-wrap items-center -mx-10">
          <div class="relative w-full lg:w-1/2 px-10 mb-16 lg:mb-0">
            <div class="relative lg:max-w-md lg:ml-auto z-10">
              <img
                class="object-cover w-full lg:w-112 h-160"
                src="https://images.pexels.com/photos/7148031/pexels-photo-7148031.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940"
                alt=""
              />
            </div>
            <img
              class="hidden lg:block absolute top-0 right-0 mt-52 -mr-40"
              src="zospace-assets/images/blue-eclipse.png"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 px-10">
            <div class="max-w-lg">
              <ul>
                <li class="flex pb-10 mb-8 border-b border-gray-50">
                  <div class="mr-8">
                    <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                      1
                    </span>
                  </div>
                  <div class="max-w-xs">
                    <h3 class="mb-6 text-lg font-bold font-heading">
                      Register account
                    </h3>
                    <p class="text-lg">
                      It&rsquo;s over, maecenas tincidunt malesuada dolor sit
                      amet malesuada.
                    </p>
                  </div>
                </li>
                <li class="flex pb-10 mb-8 border-b border-gray-50">
                  <div class="mr-8">
                    <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                      2
                    </span>
                  </div>
                  <div class="max-w-xs">
                    <h3 class="mb-6 text-lg font-bold font-heading">
                      Customize tools
                    </h3>
                    <p class="text-lg">
                      The brown me quam, sagittis porttitor lorem vel, commodo
                      fringilla nisl.
                    </p>
                  </div>
                </li>
                <li class="flex pb-10 border-b border-gray-50">
                  <div class="mr-8">
                    <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                      3
                    </span>
                  </div>
                  <div class="max-w-xs">
                    <h3 class="mb-6 text-lg font-bold font-heading">
                      Work with your team
                    </h3>
                    <p class="text-lg">
                      The time, this accumsan augue, posuere posuere elit lorem.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
