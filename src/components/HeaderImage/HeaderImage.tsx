import '@/global.css';

export type HeaderImageProps<T extends React.ElementType = 'img'> = {
  ImageOverride?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'src'>;

/**
 * Displays a header image with a custom image component.
 * Compatible with Next.js Image component.
 * @example
 * <HeaderImage src="https://example.com/image.jpg" ImageOverride={Image} />
 * @example
 * <HeaderImage src="https://example.com/image.jpg" ImageOverride={Image} width={100} height={100} />
 * @example
 * <HeaderImage src="https://example.com/image.jpg" ImageOverride={Image} width={100} height={100} alt="Header background" />
 */
export const HeaderImage = <T extends React.ElementType = 'img'>({ ImageOverride, ...props }: HeaderImageProps<T>) => {
  const ImageComponent = ImageOverride || 'img';
  return <ImageComponent {...props} className="pcl:w-full pcl:m-0" />;
};
