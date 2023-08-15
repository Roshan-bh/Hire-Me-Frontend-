import { useRouter } from "next/router";
import SpecificDetails from "@/components/home/specificDetails";
const SpecificInternship = () => {
  const router = useRouter();
  const specificInternship = router.query.specificInternship;
  return (
    <div>
      <SpecificDetails />
    </div>
  );
};
export default SpecificInternship;
