import ComponentIframe from "@/app/(site)/[slug]/components/component-iframe";

import { Example } from "@/types/example";
import CodeDialog from "@/app/(site)/[slug]/components/code-dialog";
import Categories from "@/components/categories";

export default function ExampleDetail({ example }: { example: Example }) {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8 lg:space-y-16 lg:py-12">
      <header className="space-y-3 text-center lg:space-y-4">
        <h1 className="text-2xl font-semibold lg:text-4xl">{example.meta.title}</h1>
        <p className="text-muted-foreground mx-auto max-w-lg lg:text-lg">
          {example.info.description}
        </p>
      </header>

      <div className="mb-6">
        <CodeDialog example={example} />
      </div>

      <div className="block lg:hidden">
        <figure>
          <img
            src={`${process.env.BASE_URL}/${example.info.cover_image}`}
            className="w-full object-cover"
            alt={`shadcn example ${example.meta.title}`}
          />
        </figure>
      </div>

      <div className="hidden lg:block">
        <ComponentIframe id={example.href} url={`/demo/${example.href}`} />
      </div>

      <Categories />
    </div>
  );
}
