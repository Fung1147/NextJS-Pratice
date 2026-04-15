import Link from "next/link";

const page = async () => {

  await new Promise((resolve)=>setInterval(resolve, 1000))
  return (
    <div>
      Hello Home
    </div>
  );
};
export default page;
