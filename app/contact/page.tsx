import { socialMedia } from "@/data";
import ContactForm from "./components/ContactForm";
import Link from "next/link";
import { IconMail, IconPhone } from "@tabler/icons-react";

export default function page() {
  return (
    <div className="bg-black-100 py-20 px-12">
      <div className="gap-10 flex max-md:flex-col justify-center items-center border-2 p-10 border-slate-700 rounded-xl">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-bold">
            Reach out to me and let's discuss how can help you{" "}
            <span className="text-purple">acheive</span> your goals.
          </h1>
          <div className="py-5">
            <div className="flex flex-col py-5">
              <ul className="flex flex-col space-y-5">
                <li className="flex gap-2">
                  <IconMail /> <span>sagaradnuwan@gmail.com</span>
                </li>
                <li className="flex gap-2">
                  <IconPhone /> <span>+94 76 930 4468</span>
                </li>
              </ul>
              <p className="mt-5">
                I would love to hear from you! Whether you have a project you'd
                like to discuss, need help with your website, or just want to
                say hello, feel free to reach out. I'm always excited to connect
                with new people and explore how we can work together. Fill out
                the form below or contact me directly via email or phone, and
                I’ll get back to you as soon as possible
              </p>
            </div>

            <h1 className="text-xl font-bold">
              You can <span className="text-purple">connect</span> with me
            </h1>
            <div className="flex items-center md:gap-3 gap-6 mt-5">
              {socialMedia.map((profile) => (
                <Link
                  href={profile.link}
                  target="_blank"
                  key={profile.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <img src={profile.img} alt="" width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
