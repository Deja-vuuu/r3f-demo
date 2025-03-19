import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Background = ({ setColor }) => {
  const tl = useRef();
  const skyData = useRef({
    color: "#313131",
  });
  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .to(skyData.current, {
        duration: 1,
        color: "#ffc544",
      })
      .to(skyData.current, {
        duration: 1,
        color: "#7c4e9f",
      });
    tl.current.pause();
  }, []);
  const scrollData = useScroll();
  useFrame(() => {
    if (!tl.current) {
      return;
    }
    tl.current.progress(scrollData.offset);
    setColor(skyData.current.color)
  });
  return <></>
};
export default Background;