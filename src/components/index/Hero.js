import React from "react"
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

import { PrimaryCTA, GhostCTA } from "../Buttons"
import Curve from "../../assets/curve.svg"

const HeroSection = styled(motion.section)`
  background-image: linear-gradient(
    270deg,
    #253670 0%,
    #2c639b 0.01%,
    #2f8bcb 100%
  );
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  padding-bottom: 160px;

  > svg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  }

  @media screen and (min-width: 500px) {
    padding-bottom: 300px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding-bottom: 100px;
    padding-top: 100px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    padding-left: 200px;
    padding-right: 200px;
  }
`

const Tagline = styled.h2`
  color: white;
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.03em;
  margin-bottom: 12px;

  > span {
    color: ${p => p.theme.orange};
  }

  @media screen and (min-width: 1000px) {
    font-size: 32px;
  }
`

const odd = keyframes`
  from {
      transform: translateY(-10px);
  }

  to {
      transform: translateY(5px);
  }
`

const even = keyframes`
  from {
      transform: translateY(10px);
  }

  to {
      transform: translateY(5px);
  }
`

const LogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
  position: relative;
  z-index: 50;

  @media screen and (min-width: 520px) {
    align-self: center;
  }

  @media screen and (min-width: 768px) {
    order: 1;
    align-self: stretch;
    flex: 1;
    max-width: 600px;
  }
  > svg {
    width: 100%;
  }

  .odd {
    transform: translateY(-10px);
    animation: ${odd} 1s ease forwards;
  }

  .even {
    transform: translateY(10px);
    animation: ${even} 1s ease forwards;
  }

  .one.one {
  }
  .two.two {
    animation-delay: 0.15s;
  }
  .three.three {
    animation-delay: 0.3s;
  }
  .four.four {
    animation-delay: 0.45s;
  }
  .five.five {
    animation-delay: 0.6s;
  }
  .six.six {
    animation-delay: 0.75s;
  }
  .seven.seven {
    animation-delay: 0.9s;
  }
  .eight.eight {
    animation-delay: 1.05s;
  }
`

const Change = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const Description = styled.p`
  color: ${p => p.theme["light-blue"]};
  font-size: 11.5px;
  line-height: 1.64;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-right: 36px;
    max-width: 300px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 450px;
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 64px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 50;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
const item = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -30,
  },
}

const Hero = () => {
  return (
    <HeroSection initial="hidden" variants={list} animate="visible">
      <LogoContainer variants={item}>
        <svg
          viewBox="0 0 245 227"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M101.041 33.1442C111.265 33.1442 119.552 25.9611 119.552 17.1003C119.552 8.23951 111.265 1.05643 101.041 1.05643C90.8176 1.05643 82.5298 8.23951 82.5298 17.1003C82.5298 25.9611 90.8176 33.1442 101.041 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even one"
          />
          <path
            d="M97.0963 33.1442C107.32 33.1442 115.608 25.9611 115.608 17.1003C115.608 8.23951 107.32 1.05643 97.0963 1.05643C86.8728 1.05643 78.585 8.23951 78.585 17.1003C78.585 25.9611 86.8728 33.1442 97.0963 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd one"
          />
          <path
            d="M93.2271 33.1442C103.451 33.1442 111.738 25.9611 111.738 17.1003C111.738 8.23951 103.451 1.05643 93.2271 1.05643C83.0036 1.05643 74.7158 8.23951 74.7158 17.1003C74.7158 25.9611 83.0036 33.1442 93.2271 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even two"
          />
          <path
            d="M89.358 33.1442C99.5815 33.1442 107.869 25.9611 107.869 17.1003C107.869 8.23951 99.5815 1.05643 89.358 1.05643C79.1345 1.05643 70.8467 8.23951 70.8467 17.1003C70.8467 25.9611 79.1345 33.1442 89.358 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd two"
          />
          <path
            d="M85.4132 33.1442C95.6367 33.1442 103.924 25.9611 103.924 17.1003C103.924 8.23951 95.6367 1.05643 85.4132 1.05643C75.1896 1.05643 66.9019 8.23951 66.9019 17.1003C66.9019 25.9611 75.1896 33.1442 85.4132 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even three"
          />
          <path
            d="M81.5435 33.1442C91.7671 33.1442 100.055 25.9611 100.055 17.1003C100.055 8.23951 91.7671 1.05643 81.5435 1.05643C71.32 1.05643 63.0322 8.23951 63.0322 17.1003C63.0322 25.9611 71.32 33.1442 81.5435 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd three"
          />
          <path
            d="M77.6744 33.1442C87.8979 33.1442 96.1857 25.9611 96.1857 17.1003C96.1857 8.23951 87.8979 1.05643 77.6744 1.05643C67.4509 1.05643 59.1631 8.23951 59.1631 17.1003C59.1631 25.9611 67.4509 33.1442 77.6744 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even four"
          />
          <path
            d="M73.8053 33.1442C84.0288 33.1442 92.3166 25.9611 92.3166 17.1003C92.3166 8.23951 84.0288 1.05643 73.8053 1.05643C63.5817 1.05643 55.2939 8.23951 55.2939 17.1003C55.2939 25.9611 63.5817 33.1442 73.8053 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd four"
          />
          <path
            d="M69.8604 33.1442C80.0839 33.1442 88.3717 25.9611 88.3717 17.1003C88.3717 8.23951 80.0839 1.05643 69.8604 1.05643C59.6369 1.05643 51.3491 8.23951 51.3491 17.1003C51.3491 25.9611 59.6369 33.1442 69.8604 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even five"
          />
          <path
            d="M65.9913 33.1442C76.2148 33.1442 84.5026 25.9611 84.5026 17.1003C84.5026 8.23951 76.2148 1.05643 65.9913 1.05643C55.7678 1.05643 47.48 8.23951 47.48 17.1003C47.48 25.9611 55.7678 33.1442 65.9913 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd five"
          />
          <path
            d="M62.1221 33.1442C72.3457 33.1442 80.6335 25.9611 80.6335 17.1003C80.6335 8.23951 72.3457 1.05643 62.1221 1.05643C51.8986 1.05643 43.6108 8.23951 43.6108 17.1003C43.6108 25.9611 51.8986 33.1442 62.1221 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even six"
          />
          <path
            d="M58.253 33.1442C68.4765 33.1442 76.7643 25.9611 76.7643 17.1003C76.7643 8.23951 68.4765 1.05643 58.253 1.05643C48.0295 1.05643 39.7417 8.23951 39.7417 17.1003C39.7417 25.9611 48.0295 33.1442 58.253 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd six"
          />
          <path
            d="M54.3077 33.1442C64.5312 33.1442 72.819 25.9611 72.819 17.1003C72.819 8.23951 64.5312 1.05643 54.3077 1.05643C44.0842 1.05643 35.7964 8.23951 35.7964 17.1003C35.7964 25.9611 44.0842 33.1442 54.3077 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even seven"
          />
          <path
            d="M50.4386 33.1442C60.6621 33.1442 68.9499 25.9611 68.9499 17.1003C68.9499 8.23951 60.6621 1.05643 50.4386 1.05643C40.215 1.05643 31.9272 8.23951 31.9272 17.1003C31.9272 25.9611 40.215 33.1442 50.4386 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd seven"
          />
          <path
            d="M46.5694 33.1442C56.7929 33.1442 65.0807 25.9611 65.0807 17.1003C65.0807 8.23951 56.7929 1.05643 46.5694 1.05643C36.3459 1.05643 28.0581 8.23951 28.0581 17.1003C28.0581 25.9611 36.3459 33.1442 46.5694 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="even eight"
          />
          <path
            d="M42.6246 33.1442C52.8481 33.1442 61.1359 25.9611 61.1359 17.1003C61.1359 8.23952 52.8481 1.05643 42.6246 1.05643C32.4011 1.05643 24.1133 8.23952 24.1133 17.1003C24.1133 25.9611 32.4011 33.1442 42.6246 33.1442Z"
            stroke="#54AFEF"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            className="odd eight"
          />
          <path
            d="M34.224 60.9973C36.7001 62.573 32.2543 65.7807 29.7219 67.1876C27.2833 69.72 22.8563 72.9277 24.6571 65.4993C26.4579 58.0709 28.784 58.4649 29.7219 59.5904C33.6612 58.1835 32.5357 52.2746 34.224 52.8373C35.4515 53.2465 33.9829 57.5603 32.86 60.2444C33.1705 60.3707 33.6118 60.6077 34.224 60.9973Z"
            fill="#DCC392"
          />
          <path
            d="M22.9692 68.3131L24.3761 65.4993L30.0037 67.1876L28.5968 69.72L22.9692 68.3131Z"
            fill="#C4C4C4"
          />
          <path
            d="M89.0928 104.892L85.7163 93.0744L106.82 84.3517L108.227 91.1047L101.192 102.078L89.0928 104.892Z"
            fill="#D3B475"
          />
          <path
            d="M109.633 90.8233C106.032 88.5723 92.188 99.8274 85.7163 105.736L114.98 96.4509L109.633 90.8233Z"
            fill="#C4C4C4"
          />
          <path
            d="M78.1192 69.4386C79.9201 60.6596 85.7164 57.3394 89.6557 55.6511L105.694 84.3517C105.225 85.4772 104.006 88.1784 102.881 89.9792C101.474 92.2303 81.2423 93.6371 79.8075 93.6371C76.7123 93.6371 78.213 86.0399 78.1192 81.5379L73.6172 77.0358C73.6172 77.0358 76.3184 78.2176 78.1192 69.4386Z"
            fill="#E8D2A7"
          />
          <ellipse
            cx="104.569"
            cy="75.9103"
            rx="3.65792"
            ry="3.93929"
            fill="#E8D2A7"
          />
          <path
            d="M99.7853 79.8496V74.7848C94.7205 80.6937 89.6557 61.8414 88.2488 58.7462C87.1233 56.2701 82.3399 54.7131 80.0889 54.2442C81.3082 53.2125 84.6472 50.8676 88.2488 49.7421C92.7509 48.3352 107.101 54.5256 109.071 57.9021C111.04 61.2786 113.01 69.72 113.291 72.8151C113.517 75.2913 109.258 82.4758 107.101 85.7585H105.976L103.443 79.8496C104.663 80.131 107.101 79.7933 107.101 76.1917C107.101 72.59 103.912 74.691 102.318 76.1917L99.7853 79.8496Z"
            fill="#0C142F"
            stroke="#111116"
          />
          <path
            d="M52.5529 118.961C93.7467 96.9011 125.055 92.8868 135.559 93.6371C145.014 93.6371 146.064 115.772 145.408 126.84C132.183 130.029 94.8308 149.575 36.5292 160.38C-21.7724 171.185 2.18622 99.0771 23.2896 66.9062L29.4799 68.8759C20.0068 94.7627 11.3592 141.021 52.5529 118.961Z"
            fill="#0C142F"
          />
          <path
            d="M80.7756 172.57L64.7476 142.094L132.923 126.292L80.7756 172.57Z"
            fill="#0C142F"
          />
          <path
            d="M159.411 134.711L163.799 123.24L143.548 112.723L141.206 121.036L147.61 130.859L159.411 134.711Z"
            fill="#C09747"
          />
          <path
            d="M160.327 131.159C156.053 134.983 145.799 125.629 141.206 120.474L138.676 126.098L131.365 131.159L127.147 169.4L207.285 156.184C194.35 139.876 165.669 126.379 160.327 131.159Z"
            fill="#E88D17"
          />
          <path
            d="M144.861 191.895L171.011 203.423V184.865L144.861 190.77V191.895Z"
            fill="#ACACAC"
          />
          <path
            d="M174.951 103.24C174.645 94.2899 169.49 90.0493 165.891 87.7271L147.121 102.197L145.29 113.321C145.563 114.508 146.313 117.373 147.121 119.336C148.13 121.789 167.827 126.559 169.241 126.799C172.29 127.316 172.082 119.58 172.928 115.161L178.116 111.478C178.116 111.478 175.257 112.191 174.951 103.24Z"
            fill="#D1B06E"
          />
          <path
            d="M145.987 112.882L143.175 114.288C136.707 108.383 137.551 110.914 135.301 108.102C133.052 105.29 133.896 104.727 134.177 103.884C134.402 103.209 137.457 100.978 138.957 99.9474C139.894 99.1038 141.206 97.1918 138.957 96.292C136.707 95.3922 137.457 92.3554 138.113 90.9495C140.925 85.6069 145.987 81.3892 152.173 78.015C157.121 75.3156 159.483 76.7028 160.046 77.7338C162.97 76.609 164.638 77.2651 165.107 77.7338C166.682 77.9587 167.45 80.8268 167.638 82.2327C172.137 83.6387 170.731 83.9198 171.574 85.3258C172.249 86.4505 170.918 87.2941 170.168 87.5752C169.231 87.4815 166.907 87.6315 165.107 88.9812C163.307 90.3309 163.42 91.6056 163.701 92.0742C164.826 92.6366 164.826 95.7296 163.139 95.7296C161.789 95.7296 160.514 96.1045 160.046 96.292C157.346 97.1918 156.484 98.5414 156.39 99.1038C157.74 100.903 153.953 104.353 151.891 105.852C152.791 103.603 151.516 103.04 150.767 103.04C147.167 103.49 147.205 105.477 147.674 106.415C151.723 111.139 148.236 112.694 145.987 112.882Z"
            fill="#523305"
          />
          <path
            d="M143.174 114.569L145.986 112.882C147.486 112.788 150.26 111.982 149.36 109.508C148.236 106.415 145.705 104.727 149.36 103.322C152.285 102.197 152.453 104.353 152.172 105.571C154.703 103.79 158.864 99.8349 155.265 98.2602C150.766 96.292 150.485 99.9474 152.172 99.9474"
            stroke="#432A04"
          />
          <path
            d="M167.453 82.254C167.359 79.0673 165.091 74.0997 156.768 79.7234C148.445 85.347 153.3 85.4408 156.768 84.7847"
            stroke="#432A04"
          />
          <path
            d="M143.456 114.569L138.675 110.632C136.426 109.414 132.377 106.358 134.176 103.884C136.426 100.791 143.174 98.8226 138.675 96.0107C134.176 93.1989 143.456 81.6703 151.891 78.0149C158.64 75.0906 159.952 76.7965 159.764 78.0149"
            stroke="#432A04"
          />
          <path
            d="M156.109 98.8226C157.046 97.6979 159.596 95.5609 162.295 96.0108C165.669 96.5731 165.669 89.5435 158.921 91.5118C152.172 93.4801 159.483 83.9198 160.889 86.7317"
            stroke="#432A04"
          />
          <path
            d="M163.42 91.793C163.514 90.4808 164.826 87.8002 169.325 87.5752C174.948 87.294 169.887 80.2644 165.669 82.5139C162.295 84.3135 164.263 85.3257 165.669 85.6069"
            stroke="#432A04"
          />
          <path
            d="M103.527 186.833C97.0601 182.334 115.056 169.4 127.709 169.4C130.857 160.492 145.948 131.694 135.301 128.628C91.3862 138.031 74.5461 162.254 68.3599 181.374C55.1848 222.096 122.929 209.047 153.578 183.178L149.923 178.398C124.054 187.958 109.995 191.332 103.527 186.833Z"
            fill="#E88D17"
          />
          <path
            d="M153.74 184.699C147.378 184.916 149.322 180.453 151.089 178.195C152.267 177.924 155.035 177.544 156.685 178.195C158.334 178.845 157.372 179.369 156.685 179.55C162.28 181.989 160.513 186.597 159.63 184.699C158.746 182.802 155.507 182.26 155.507 183.073C155.507 183.724 154.329 184.428 153.74 184.699Z"
            fill="#D1B06E"
          />
          <path
            d="M172.98 165.182C172.98 164.651 173.225 164.178 173.609 163.868C174.201 163.39 175.045 163.437 175.798 163.321L230.335 154.952C231.088 154.836 231.918 154.651 232.56 155.062C232.923 155.294 233.153 155.669 233.153 156.184V191.332C233.153 191.8 233.176 192.436 233.08 192.953C232.922 193.809 231.879 193.939 231.023 194.089L175.954 203.76C175.098 203.91 174.108 204.113 173.487 203.504C173.174 203.198 172.98 202.771 172.98 202.299V165.182Z"
            fill="#C4C4C4"
          />
          <path
            d="M122.313 183.18L114.864 168.281L170.849 162.186V180.697L164.528 182.277L155.498 173.473L122.313 183.18Z"
            fill="#E88D17"
          />
        </svg>
      </LogoContainer>
      <Change variants={item}>
        <Tagline>
          Enabling your{" "}
          <span>
            AI-Infused <br /> Digital Transformation
          </span>
        </Tagline>
        <Description>
          We are a digital enabling solution provider that develops, integrates,
          implements and supports innovative ideas to allow companies achieve
          their own best digital transformation.
        </Description>

        <ButtonContainer>
          <PrimaryCTA to="/solutions">Our Solutions</PrimaryCTA>
          <GhostCTA to="/contact-us">Contact Us</GhostCTA>
        </ButtonContainer>
      </Change>

      <Curve />
    </HeroSection>
  )
}

export default Hero
