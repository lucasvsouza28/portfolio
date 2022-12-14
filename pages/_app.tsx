import type { AppProps } from 'next/app'
import Header from '../components/Header'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <img
        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2085%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2086)'%3e%3c/rect%3e%3cpath d='M763.9838329098312 407.88400251364186L779.7978220263433 536.6786082867352 908.5924277994366 520.8646191702231 892.7784386829245 392.0700133971298z' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M556.1056436659109 512.1239535815957L611.305206384293 625.299829076592 669.2815191609071 456.92439086321366z' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M25.46092764963447 257.10008138472693L110.91711626990714 323.86577324979294 92.22661951470045 171.64389276445428z' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M484.245%2c347.531C511.538%2c349.903%2c543.014%2c349.439%2c557.984%2c326.495C573.862%2c302.16%2c566.557%2c269.911%2c550.832%2c245.477C536.415%2c223.075%2c510.865%2c210.872%2c484.245%2c211.916C459.368%2c212.892%2c437.727%2c228.339%2c426.132%2c250.37C415.301%2c270.948%2c417.866%2c295.398%2c429.802%2c315.355C441.4%2c334.745%2c461.736%2c345.575%2c484.245%2c347.531' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M480.8131856800574 19.045114287537977L402.181708559922 94.97864908895201 556.7467204814715 97.67659140767338z' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M937.914%2c504.08C962.456%2c505.921%2c989.497%2c502.315%2c1003.101%2c481.806C1017.877%2c459.529%2c1015.818%2c430.059%2c1002.317%2c406.987C988.953%2c384.149%2c964.375%2c370.422%2c937.914%2c370.411C911.434%2c370.4%2c885.046%2c383.143%2c873.421%2c406.935C862.796%2c428.68%2c874.33%2c452.989%2c887.716%2c473.152C899.367%2c490.702%2c916.908%2c502.505%2c937.914%2c504.08' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M736.513%2c450.691C753.598%2c450.236%2c767.442%2c438.381%2c775.89%2c423.524C784.228%2c408.861%2c787.359%2c390.91%2c778.761%2c376.398C770.3%2c362.117%2c753.104%2c357.593%2c736.513%2c357.066C718.671%2c356.499%2c698.851%2c358.449%2c689.347%2c373.559C679.395%2c389.38%2c683.578%2c409.777%2c693.329%2c425.723C702.626%2c440.928%2c718.697%2c451.165%2c736.513%2c450.691' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M260.0553338040671 470.8453797465885L177.43990561193039 417.1942933633512 138.27099013314285 567.942978843175z' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M599.52683944901 112.23781316441162L530.6429496689384 162.28488858406755 580.6900250885942 231.16877836413923 649.573914868666 181.1217029444833z' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M66.3342735767819 197.5604498291371L-5.319628122440179 245.89161679025244 103.00407316884383 329.20688585852787z' fill='rgba(157%2c 179%2c 238%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2085'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2086'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(20%2c 42%2c 140%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"
        className="object-cover fixed inset-0 h-screen w-screen -z-10"
      />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
