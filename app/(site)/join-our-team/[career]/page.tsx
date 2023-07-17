import ApplyJob from "@/components/joinOurTeam/ApplyJob";
import { getCareer } from "@/sanity/sanity-utils";

type Props = {
  params: { career: string };
};

export default async function Offer({ params }: Props) {
  const slug = params.career;

  const career = await getCareer(slug);

  return (
    <div className=" max-w-screen-xl mx-auto py-24">
      <h1>{career.title}</h1>
      <div>
        <h1>QUALIFICATION</h1>
        <p>{career.qualification}</p>
        <h1>ABOUT THE JOB </h1>
        <p>{career.aboutthejob}</p>
        <h1>RESPONSIBILITIES</h1>
        <p>{career.responsibilities}</p>
      </div>
      <div>
        <ApplyJob />
      </div>
    </div>
  );
}
