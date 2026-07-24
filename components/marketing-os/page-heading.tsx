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
        <p className="text-sm font-medium text-[#bda8ef]">{eyebrow}</p>
      ) : null}
      <h1 className="mt-2 text-[clamp(2rem,3vw,3.4rem)] font-semibold tracking-[-0.06em] text-white">
        {title}
      </h1>
      <p className="mt-4 text-[15px] leading-8 text-[#b4acc5] md:text-[17px]">
        {description}
      </p>
    </header>
  );
}
