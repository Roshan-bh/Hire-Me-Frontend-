import { useRouter } from "next/router";
import SpecificInternship from "../internships/[specificInternship]";
const SpecificJob = () => {
  const router = useRouter();
  const specificJob = router.query.specificJob;
  return (
    <div>
      <SpecificInternship />
    </div>
  );
};
export default SpecificJob;
