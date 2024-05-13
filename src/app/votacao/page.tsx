import { Header } from '@/components/header'

export default function Votacao() {
  return (
    <div>
      <Header />
      <div className=" bg-white"></div>
      <iframe
        style={{ height: 'calc(100vh + 80px)', width: '100%' }}
        className=" -mt-20 md:-mt-8 overflow-hidden"
        height="100vh"
        width="100%"
        src="https://pt.surveymonkey.com/r/JPQRSND"
      ></iframe>
    </div>
  )
}
