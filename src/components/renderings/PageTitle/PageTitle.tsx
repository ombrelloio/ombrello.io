import { PageTitleProps } from "@types";

const PageTitle = ({ title, text }: PageTitleProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="PageTitle"
    >
      <p className="font-bold"> PageTitle</p>
      <h1> {title}</h1>
      <p>{text}</p>
    </section>
  );
};

export { PageTitle };
