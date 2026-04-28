import userImage from "@/images/content/user.jpg";
import bagImage from "@/images/content/bag.jpg";
import work1Image from "@/images/content/work/work1.jpg";
import work2Image from "@/images/content/work/work2.jpg";
import work3Image from "@/images/content/work/work3.jpg";
import work4Image from "@/images/content/work/work4.jpg";
import buddhaBackground from "@/images/parallax/buddha/background.png";
import buddhaMount from "@/images/parallax/buddha/mount_2.png";
import buddhaImage from "@/images/parallax/buddha/buddha_3.png";
import cloudFront from "@/images/parallax/buddha/cloud_4.png";
import cloudMiddle from "@/images/parallax/buddha/cloud_5.png";
import cloudBack from "@/images/parallax/buddha/cloud_6.png";

export const socialIcons = ["insta", "vk", "github"];

export const images = {
  bag: bagImage,
  buddha: buddhaImage,
  buddhaBackground,
  buddhaMount,
  cloudBack,
  cloudFront,
  cloudMiddle,
  user: userImage,
  worksFallback: [work1Image, work2Image, work3Image, work4Image],
  works: {
    work1: work1Image,
    work2: work2Image,
    work3: work3Image,
    work4: work4Image
  }
};
