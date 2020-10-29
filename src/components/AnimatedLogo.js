// Animation.js
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { GradientPinkBlue as CircleGradient } from "@vx/gradient";

export default function AnimatedLogo() {
  const [hovered, setHovered] = useState(false);
  const transitions = useTransition(hovered, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div
      className="flex items-center justify-center h-16 w-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width={50} height={50}>
        <CircleGradient id="circleGradient-dashoffset" />
        <circle
          strokeWidth="3"
          cx="25"
          cy="25"
          r="20"
          stroke="url(#circleGradient-dashoffset)"
          fill="none"
        />
      </svg>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>
            <svg
              width={25}
              height={25}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="#e8e8e8"
                points="12 0 7 4.58 7 3 3 3 3 8.25 0 11 3 11 3 22 10 22 10 16 14 16 14 22 21 22 21 11 24 11 12 0"
              />
            </svg>
          </animated.div>
        ) : (
          <animated.div style={props}>
            <svg width={50} height={50}>
              <CircleGradient id="circleGradient-dashoffset" />
              <circle
                strokeWidth="3"
                cx="25"
                cy="25"
                r="20"
                stroke="url(#circleGradient-dashoffset)"
                fill="none"
              />
              <g>
                <svg width={50} height={50} viewBox="-60 -50 300 300">
                  <path
                    strokeWidth="3"
                    fill="white"
                    stroke="white"
                    d="m46.562 163.03c-1.4885-1.8246-1.4082-54.974 0.10663-70.55 0.43296-4.4519 1.1533-13.558 1.6007-20.236 1.2815-19.127 4.3263-38.378 6.6245-41.886 2.9172-4.4522 7.0088-6.5369 7.9608-4.0561 0.40106 1.0451-0.04677 2.5443-0.99519 3.3314-2.6526 2.2015-5.478 21.07-6.9867 46.658-0.48121 8.1618-1.0657 15.165-1.2989 15.562-0.83812 1.4285-2.305 48.518-1.5114 48.518 0.44666 0 3.2961-5.132 6.3321-11.404 3.036-6.2724 6.9666-13.536 8.7346-16.141 5.6204-8.2822 6.1538-9.8017 4.743-13.512-0.87571-2.3033-0.84072-4.702 0.10459-7.1709l1.4205-3.7099 2.6284 3.2282 2.6284 3.2282 11.095-11.389c12.43-12.754 18.35-17.129 34.13-25.224 11.996-6.1529 15.412-6.8486 15.412-3.1381 0 2.437-14.876 12.39-18.519 12.39-0.94435 0-1.717 0.70826-1.717 1.5739 0 0.86565-0.38077 1.1931-0.84616 0.72775-1.392-1.392-15.542 10.261-25.212 20.765-6.771 7.3539-8.8304 10.473-8.2088 12.431 0.5464 1.7216 0.31972 2.2991-0.66385 1.6912-2.7042-1.6713-1.5584 1.2174 2.0088 5.0645 5.9202 6.3847 38.969 27.314 50.421 31.93 10.729 4.3247 14.234 8.1104 7.5094 8.1104-3.0979 0-13.179-3.3949-20.96-7.0586-9.5136-4.4793-33.202-19.577-39.255-25.019-5.5225-4.9652-7.1389-5.8148-8.1089-4.2622-10.15 16.247-16.544 29.266-20.222 41.173-1.4708 4.7619-2.9037 8.6581-3.1842 8.6581s-1.373 0.33117-2.4278 0.73593-2.5594-0.0506-3.3435-1.0118z"
                  />
                </svg>
              </g>
            </svg>
          </animated.div>
        )
      )}
    </div>
  );
}
