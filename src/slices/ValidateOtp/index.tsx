import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ValidateOtp`.
 */
export type ValidateOtpProps = SliceComponentProps<Content.ValidateOtpSlice>;

/**
 * Component for "ValidateOtp" Slices.
 */
const ValidateOtp = ({ slice }: ValidateOtpProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for validate_otp (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ValidateOtp;
