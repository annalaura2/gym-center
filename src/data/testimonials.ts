import { WithTranslation } from "react-i18next";

export type TestimonialProps = {
  avatar: string;
  author: string;
  rating: number;
  role: string;
  message: string;
};

const testimonials = (t: WithTranslation["t"]): TestimonialProps[] => [
  {
    author: "Jonathan Edward",
    avatar: "https://i.pravatar.cc/100",
    message: t(`testimonial.customer.jonathanEdward.message`),
    role: t(`testimonial.customer.jonathanEdward.role`),
    rating: 4.5,
  },
  {
    author: "Sarah Connor",
    avatar: "https://i.pravatar.cc/101",
    message: t(`testimonial.customer.sarahConnor.message`),
    role: t(`testimonial.customer.sarahConnor.role`),
    rating: 3.5,
  },
  {
    author: "Michael Johnson",
    avatar: "https://i.pravatar.cc/102",
    message: t(`testimonial.customer.michaelJohnson.message`),
    role: t(`testimonial.customer.michaelJohnson.role`),
    rating: 4.5,
  },
];

export default testimonials;
