import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateProfile = () => {
  const { user, loading, error, isUpdated, message } = useSelector(
    (state) => state.user
  );
  const [fullName, setFullName] = useState(user?.fullName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [aboutMe, setAboutMe] = useState(user?.aboutMe);
  const [portfolioURL, setPortfolioURL] = useState(user?.portfolioURL);
  const [linkedInURL, setLinkedInURL] = useState(user?.linkedInURL || "");
  const [githubURL, setGithubURL] = useState(user?.githubURL || "");
  const [instagramURL, setInstagramURL] = useState(user?.instaURL || "");
  const [fbURL, setFbURL] = useState(user?.fbURL || "");
  const [twitterURL, setTwitterURL] = useState(user?.twitterURL || "");
  const [hackerRankURL, setHackerRankURL] = useState(user?.hackerRankURL || "");
  const [avatar, setAvatar] = useState(user?.avatar?.url);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar?.url);
  const [resume, setResume] = useState(user?.resume?.url);
  const [resumePreview, setResumePreview] = useState(user?.resume?.url);
  const dispatch = useDispatch();
  const avatarHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(file);
    };
  };

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };

  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="grid w-[100%] gap-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold">Update Profile</h2>
              <p className="mb-5">Update your profile</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start lg:justify-between lg:items-center flex-col lg:flex-row gap5 mb-5">
              <div className="flex flex-col gap-2 w-full sm:w-72 mb-5 box-border">
                <Label>Profile Picture</Label>
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-auto sm:w-72 rounded-2xl"
                />
                <input
                  type="file"
                  className="avtr-updt-btn"
                  onChange={avatarHandler}
                />
              </div>

              <div className="grid gap-2 w-full sm:w-72 mb-5">
                <Label>Resume</Label>
                <img
                  src={resume}
                  alt="Resume"
                  className="w-full h-auto sm:w-72 rounded-2xl"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Full Name</Label>
              <Input type="text" defaultValue={fullName} />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input type="text" defaultValue={email} />
            </div>
            <div className="grid gap-2">
              <Label>Phone</Label>
              <Input type="text" defaultValue={phone} />
            </div>
            <div className="grid gap-2">
              <Label>About me</Label>
              <Textarea defaultValue={aboutMe} />
            </div>
            <div className="grid gap-2">
              <Label>Portfolio URL</Label>
              <Input defaultValue={portfolioURL} />
            </div>
            <div className="grid gap-2">
              <Label>LinkedIn URL</Label>
              <Input defaultValue={linkedInURL} />
            </div>
            <div className="grid gap-2">
              <Label>GitHub URL</Label>
              <Input defaultValue={githubURL} />
            </div>
            <div className="grid gap-2">
              <Label>Instagram URL</Label>
              <Input defaultValue={instagramURL} />
            </div>
            <div className="grid gap-2">
              <Label>Facebook URL</Label>
              <Input defaultValue={fbURL} />
            </div>
            <div className="grid gap-2">
              <Label>Twitter (X) URL</Label>
              <Input defaultValue={twitterURL} />
            </div>
            <div className="grid gap-2">
              <Label>HackerRank URL</Label>
              <Input defaultValue={hackerRankURL} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
