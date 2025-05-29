import Form from "@/components/Form";
import Image from "next/image";

function Page() {
  return (
    <div>
      <div className="flex flex-col items-start gap-5 pt-10 pl-32 pr-20 mb-10">
        <h2 className="font-semibold text-heading-2 text-body">
            Taaly Admin Dashboard
        </h2>
        <Form formType="ADMIN_FORM"></Form>
      </div>
      <div>
        <Image
          src="/images/capa-1.png"
          width={700}
          height={300}
          alt="capa image"
        ></Image>
      </div>
    </div>
  );
}

export default Page;
