interface IHeartSvg {
  size?: string;
}

const HeartSvg: React.FC<IHeartSvg> = ({ size }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size}
      >
        <path d="M73.388 35.592h73.214v73.599H73.388z" fill="#fda3c3"></path>
        <path d="M365.66 35.592h73.19v73.599h-73.19z" fill="#fc2286"></path>
        <path d="M0 109.191h73.388v73.447H0z" fill="#fda3c3"></path>
        <path d="M73.388 109.191h73.214v73.447H73.388z" fill="#fd60a8"></path>
        <path d="M146.602 109.191h72.911v73.447h-72.911z" fill="#fda3c3"></path>
        <path
          d="M292.387 109.191h73.272v73.447h-73.272zM438.849 109.191H512v73.447h-73.151z"
          fill="#fc2286"
        ></path>
        <path d="M365.66 109.191h73.19v73.447h-73.19z" fill="#fd60a8"></path>
        <path d="M0 182.638h73.388v73.468H0z" fill="#fd7eb8"></path>
        <path d="M73.388 182.638h73.214v73.468H73.388z" fill="#fda3c3"></path>
        <path d="M146.602 182.638h72.911v73.468h-72.911z" fill="#fd7eb8"></path>
        <path
          d="M292.387 182.638h73.272v73.468h-73.272zM438.849 182.638H512v73.468h-73.151z"
          fill="#fd60a8"
        ></path>
        <path d="M365.66 182.638h73.19v73.468h-73.19z" fill="#fc2286"></path>
        <path d="M73.388 255.959h73.214v73.409H73.388z" fill="#fd7eb8"></path>
        <path d="M146.602 255.959h72.911v73.409h-72.911z" fill="#fda3c3"></path>
        <path d="M292.387 255.959h73.272v73.409h-73.272z" fill="#fc2286"></path>
        <path d="M365.66 255.959h73.19v73.409h-73.19z" fill="#fd60a8"></path>
        <g>
          <path
            d="M146.602 329.368h72.911v73.38h-72.911z"
            fill="#fd7eb8"
          ></path>
          <path
            d="M292.387 329.368h73.272v73.38h-73.272z"
            fill="#fd60a8"
          ></path>
        </g>
        <g>
          <g fill="#fd60a8">
            <path d="M219.513 182.638v73.467H256l13.26-38.481L256 182.638zM219.513 402.747H256l13.26-37.705L256 329.368h-36.487z"></path>
          </g>
        </g>
        <g>
          <path
            d="M219.513 255.959v73.409H256l15.99-37.125L256 255.959z"
            fill="#fd7eb8"
          ></path>
          <path d="M256 255.959h36.387v73.409H256z" fill="#fd60a8"></path>
          <path
            d="M219.513 476.408H256l15.08-38.566L256 402.747h-36.487z"
            fill="#fd7eb8"
          ></path>
        </g>
        <path
          d="M256 182.638h36.387v73.468H256zM256 329.368h36.387v73.38H256z"
          fill="#fc2286"
        ></path>
        <path d="M256 402.747h36.387v73.66H256z" fill="#fd60a8"></path>
      </svg>
    </>
  );
};

export default HeartSvg;
