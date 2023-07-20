import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Career } from "@/types/Career";
import clientConfig from "./config/client-config";
import { revalidatePath } from "next/cache";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`,
    { next: { revalidate: 1 } }
  );
}
export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug":slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug":slug.current,
      content
    }`,
    { slug }
  );
}

export async function getCareers(): Promise<Career[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "career"]{
      _id,
      _createdAt,
      title,
      "slug":slug.current,
      location,
      department
    }`
  );
}
export async function getCareer(slug: string): Promise<Career> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "career" && slug.current == $slug ][0]{
      _id,
      _createdAt,
      title,
      "slug":slug.current,
      location,
      department,
      qualification,
      aboutthejob,
      responsibilities,
    }`,

    { slug }
  );
}
