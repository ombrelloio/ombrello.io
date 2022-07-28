import { JobDescriptionProps } from "@types";

const JobDescription = ({ jobHeader, jobDescription }: JobDescriptionProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="JobDescription"
    >
      <p className="font-bold mb-10">JobDescription</p>
      <p> header: {jobHeader}</p>
      {jobDescription?.html && (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: jobDescription.html }} />
      )}
    </section>
  );
};

export { JobDescription };
