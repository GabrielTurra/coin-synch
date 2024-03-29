import { Col, Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";
import { SwiperSlide } from "swiper/react";

export const HeroComponent = styled("div", {
  minHeight: "60vh",
  marginTop: "30px",
  paddingTop: "100px",

  "@md": {
    height: "65vh",
    paddingTop: "0",
  },

  "@lg": {
    marginTop: 0,
  },

  ".next-slider, .prev-slider": {
    visibility: "hidden",
  },
});

export const CustomSwiperSlide = styled(SwiperSlide, {
  opacity: 0.5,

  "&.swiper-slide-active": {
    opacity: 1,
  },

  "@md": {
    img: {
      width: "350px",
      height: "350px",
    },
  },

  "@lg": {
    img: {
      width: "450px",
      height: "450px",
    },
  },

  "@xl": {
    img: {
      width: "550px",
      height: "550px",
    },
  },
});

export const HeroContainer = styled("div", {
  padding: "0 $4",
  height: "100%",
  margin: "0 auto",
  width: "90%",
  maxWidth: "90%",

  "@sm": {
    width: "100%",
    maxWidth: "540px",
  },

  "@md": {
    padding: "0",
    margin: "0",
    marginLeft: "auto",
    width: "calc(100vw - ((100vw - 672px) / 2))",
    maxWidth: "100%",
  },

  "@lg": {
    width: "calc(100vw - ((100vw - 960px) / 2))",
  },

  "@xl": {
    width: "calc(100vw - ((100vw - 1216px) / 2))",
  },
});

export const Title = styled("h1", {
  color: "$primary",
});

export const Description = styled("p", {
  fontSize: "$xl",
  margin: "32px 0",
});

export const HeroRow = styled(Row, {
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-between",

  "@md": {
    textAlign: "start",
  },

  "@xl": {
    alignItems: "end",
  },
});

export const TagsRow = styled(Row, {
  marginTop: "50px",
  justifyContent: "center",

  "@md": {
    justifyContent: "start",
  },
});

export const Tag = styled("div", {
  marginRight: "10px",
  marginBottom: "10px",
  background: "$orange100",
  padding: "$2 $4",
  fontSize: "$xl",
  color: "$primary",
  transition: "all 0.3s ease",
  cursor: "pointer",
  borderRadius: "$sm",

  "&:hover": {
    color: "$white",
    background: "$orange500",
  },
});

export const SliderCol = styled(Col, {
  display: "none",

  "@md": {
    display: "block",
  },
});
