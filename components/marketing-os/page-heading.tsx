export function PageHeading({
  title,
  description,
  eyebrow
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="text-[13px] font-medium text-[#bda8ef] sm:text-sm">{eyebrow}</p>
      ) : null}
      <h1 className="mt-2 text-[clamp(1.75rem,7vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">
        {title}
      </h1>
      <p className="mt-3 text-[14px] leading-7 text-[#b4acc5] md:mt-4 md:text-[17px] md:leading-8">
        {description}
      </p>
    </header>
  );
}
