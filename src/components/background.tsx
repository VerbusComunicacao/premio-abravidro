import Image from "next/image";
import background from '../../public/background.png'


export default function Background() {
  return (
      <Image
      sizes="100vw"
      alt="Background"
      src={background}
      placeholder="blur"
      quality={100}
      style={{
        objectFit: 'cover',
        zIndex: -1,
        position: 'fixed',
        objectPosition: 'left',
      }}
      className="h-full w-auto"
    />
  )
}