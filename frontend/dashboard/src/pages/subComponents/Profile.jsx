import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="grid w-[100%] gap-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold">Profile</h2>
              <p>Full profile preview</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
