interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={120}
      viewBox="0 0 106 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_60)">
        <path d="M105.503 60.0107C105.503 53.0343 96.7508 46.4228 83.3317 42.3228C86.4285 28.6704 85.0521 17.8086 78.9877 14.3312C77.5899 13.5155 75.9555 13.1291 74.1706 13.1291V17.916C75.1598 17.916 75.9555 18.1092 76.6222 18.4741C79.5469 20.1484 80.8157 26.5238 79.8264 34.7238C79.5899 36.7416 79.2028 38.8668 78.7297 41.0348C74.5147 40.0045 69.9126 39.2102 65.074 38.695C62.1708 34.7238 59.1602 31.1175 56.128 27.962C63.1386 21.4579 69.7191 17.8945 74.1921 17.8945V13.1076C68.2783 13.1076 60.5365 17.3149 52.7087 24.6134C44.8809 17.3579 37.1391 13.1935 31.2252 13.1935V17.9804C35.6767 17.9804 42.2788 21.5223 49.2894 27.9835C46.2787 31.139 43.268 34.7238 40.4078 38.695C35.5477 39.2102 30.9456 40.0045 26.7307 41.0563C26.2361 38.9097 25.8705 36.8275 25.6124 34.8312C24.6017 26.6312 25.849 20.2558 28.7521 18.56C29.3973 18.1736 30.236 18.0018 31.2252 18.0018V13.2149C29.4188 13.2149 27.7844 13.6013 26.3651 14.417C20.3222 17.8945 18.9674 28.7348 22.0856 42.3442C8.70951 46.4657 0 53.0558 0 60.0107C0 66.9872 8.75252 73.5987 22.1716 77.6987C19.0749 91.351 20.4512 102.213 26.5156 105.69C27.9134 106.506 29.5478 106.892 31.3542 106.892C37.2681 106.892 45.0099 102.685 52.8377 95.3866C60.6655 102.642 68.4073 106.807 74.3212 106.807C76.1276 106.807 77.762 106.42 79.1813 105.604C85.2242 102.127 86.579 91.2866 83.4608 77.6772C96.7938 73.5772 105.503 66.9657 105.503 60.0107V60.0107ZM77.5039 45.6929C76.7082 48.462 75.719 51.317 74.6007 54.172C73.719 52.4547 72.7943 50.7374 71.7836 49.0202C70.7943 47.3029 69.7406 45.6285 68.6869 43.9971C71.7406 44.4479 74.6867 45.006 77.5039 45.6929ZM67.6546 68.5542C65.9772 71.4521 64.2568 74.1997 62.4719 76.7542C59.2677 77.0332 56.0204 77.1835 52.7517 77.1835C49.5044 77.1835 46.2572 77.0332 43.0744 76.7756C41.2895 74.2212 39.5476 71.495 37.8702 68.6186C36.2359 65.8065 34.752 62.9516 33.3972 60.0751C34.7305 57.1987 36.2359 54.3222 37.8487 51.5102C39.5261 48.6123 41.2465 45.8647 43.0314 43.3102C46.2357 43.0312 49.4829 42.8809 52.7517 42.8809C55.9989 42.8809 59.2462 43.0312 62.4289 43.2887C64.2138 45.8432 65.9557 48.5694 67.6331 51.4458C69.2675 54.2579 70.7513 57.1128 72.1061 59.9893C70.7513 62.8657 69.2675 65.7421 67.6546 68.5542ZM74.6007 65.7636C75.762 68.64 76.7512 71.5165 77.5684 74.3071C74.7513 74.994 71.7836 75.5736 68.7084 76.0243C69.7621 74.3715 70.8159 72.6756 71.8051 70.9369C72.7943 69.2196 73.719 67.4809 74.6007 65.7636ZM52.7947 88.6678C50.7947 86.6071 48.7948 84.3102 46.8163 81.7987C48.7518 81.8845 50.7302 81.9489 52.7302 81.9489C54.7516 81.9489 56.7516 81.906 58.7086 81.7987C56.7731 84.3102 54.7732 86.6071 52.7947 88.6678ZM36.795 76.0243C33.7413 75.5736 30.7951 75.0154 27.978 74.3285C28.7736 71.5594 29.7629 68.7044 30.8811 65.8495C31.7628 67.5667 32.6875 69.284 33.6983 71.0013C34.709 72.7186 35.7413 74.3929 36.795 76.0243ZM52.6872 31.3537C54.6871 33.4144 56.6871 35.7113 58.6655 38.2228C56.7301 38.1369 54.7516 38.0725 52.7517 38.0725C50.7302 38.0725 48.7303 38.1154 46.7733 38.2228C48.7087 35.7113 50.7087 33.4144 52.6872 31.3537ZM36.7735 43.9971C35.7198 45.65 34.666 47.3458 33.6768 49.0846C32.6875 50.8018 31.7628 52.5191 30.8811 54.2364C29.7199 51.3599 28.7306 48.4835 27.9134 45.6929C30.7306 45.0275 33.6983 44.4479 36.7735 43.9971V43.9971ZM17.3115 70.8725C9.69874 67.6311 4.7741 63.3809 4.7741 60.0107C4.7741 56.6406 9.69874 52.3688 17.3115 49.149C19.1609 48.3547 21.1824 47.6463 23.2684 46.9809C24.4942 51.1882 26.107 55.5673 28.107 60.0537C26.1285 64.5186 24.5372 68.8762 23.3329 73.062C21.2039 72.3966 19.1824 71.6667 17.3115 70.8725ZM28.8812 101.547C25.9565 99.873 24.6877 93.4976 25.6769 85.2976C25.9135 83.2798 26.3006 81.1547 26.7737 78.9866C30.9887 80.017 35.5907 80.8112 40.4293 81.3264C43.3325 85.2976 46.3432 88.9039 49.3754 92.0594C42.3648 98.5636 35.7843 102.127 31.3112 102.127C30.3435 102.105 29.5263 101.912 28.8812 101.547V101.547ZM79.8909 85.1903C80.9017 93.3903 79.6544 99.7657 76.7512 101.461C76.1061 101.848 75.2674 102.02 74.2781 102.02C69.8266 102.02 63.2246 98.4777 56.214 92.0165C59.2247 88.861 62.2354 85.2762 65.0955 81.305C69.9557 80.7898 74.5577 79.9955 78.7727 78.9437C79.2673 81.1118 79.6544 83.194 79.8909 85.1903V85.1903ZM88.1704 70.8725C86.3209 71.6667 84.2995 72.3751 82.2135 73.0406C80.9877 68.8332 79.3748 64.4542 77.3749 59.9678C79.3533 55.5029 80.9447 51.1453 82.149 46.9594C84.278 47.6249 86.2994 48.3547 88.1919 49.149C95.8046 52.3903 100.729 56.6406 100.729 60.0107C100.708 63.3809 95.7831 67.6526 88.1704 70.8725V70.8725Z" fill="#81D8F7"/>
        <path d="M52.7302 69.8207C58.1579 69.8207 62.5579 65.4286 62.5579 60.0107C62.5579 54.5929 58.1579 50.2008 52.7302 50.2008C47.3024 50.2008 42.9024 54.5929 42.9024 60.0107C42.9024 65.4286 47.3024 69.8207 52.7302 69.8207Z" fill="#81D8F7"/>
      </g>
      <defs>
        <clipPath id="clip0_1_60">
          <rect width="105.503" height="120" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
