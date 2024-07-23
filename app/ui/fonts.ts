import {
  Inter,
  Lusitana,
  Edu_VIC_WA_NT_Beginner,
  Patrick_Hand,
  Poppins,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const edu_vic_wa = Edu_VIC_WA_NT_Beginner({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const patrick_hand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
