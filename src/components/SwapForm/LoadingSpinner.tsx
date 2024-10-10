import styles from './LoadingSpinner.module.scss';

// If need, replace with better variant
export default function SwapFormLoadingSpinner() {
    return (
        <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.Spinner}
        >
            <circle cx="19" cy="19" r="16.5" stroke="#D9D9D9" strokeOpacity="0.29" strokeWidth="5" />
            <mask id="path-2-inside-1_1_207" fill="white">
                <path d="M37.3439 23.9498C36.3132 27.7697 34.1157 31.1725 31.0581 33.6834C28.0004 36.1944 24.2352 37.6881 20.2878 37.9563C16.3404 38.2245 12.4077 37.2537 9.03858 35.1793C5.66945 33.105 3.03192 30.0306 1.49404 26.3852C-0.043836 22.7398 -0.405337 18.7053 0.459984 14.8445C1.3253 10.9838 3.37427 7.48954 6.32098 4.8493C9.26768 2.20905 12.9651 0.554565 16.8973 0.116708C20.8295 -0.321149 24.8003 0.479467 28.2556 2.40684L25.8555 6.70972C23.2962 5.28215 20.3551 4.68915 17.4426 5.01346C14.5301 5.33778 11.7914 6.56323 9.60886 8.51881C7.42629 10.4744 5.90865 13.0626 5.26772 15.9221C4.62679 18.7817 4.89455 21.77 6.03363 24.4701C7.17271 27.1702 9.12628 29.4473 11.6217 30.9837C14.1172 32.5202 17.0301 33.2392 19.9538 33.0406C22.8776 32.842 25.6665 31.7356 27.9312 29.8758C30.1959 28.016 31.8236 25.4955 32.587 22.6662L37.3439 23.9498Z" />
            </mask>
            <path
                d="M37.3439 23.9498C36.3132 27.7697 34.1157 31.1725 31.0581 33.6834C28.0004 36.1944 24.2352 37.6881 20.2878 37.9563C16.3404 38.2245 12.4077 37.2537 9.03858 35.1793C5.66945 33.105 3.03192 30.0306 1.49404 26.3852C-0.043836 22.7398 -0.405337 18.7053 0.459984 14.8445C1.3253 10.9838 3.37427 7.48954 6.32098 4.8493C9.26768 2.20905 12.9651 0.554565 16.8973 0.116708C20.8295 -0.321149 24.8003 0.479467 28.2556 2.40684L25.8555 6.70972C23.2962 5.28215 20.3551 4.68915 17.4426 5.01346C14.5301 5.33778 11.7914 6.56323 9.60886 8.51881C7.42629 10.4744 5.90865 13.0626 5.26772 15.9221C4.62679 18.7817 4.89455 21.77 6.03363 24.4701C7.17271 27.1702 9.12628 29.4473 11.6217 30.9837C14.1172 32.5202 17.0301 33.2392 19.9538 33.0406C22.8776 32.842 25.6665 31.7356 27.9312 29.8758C30.1959 28.016 31.8236 25.4955 32.587 22.6662L37.3439 23.9498Z"
                stroke="url(#paint0_angular_1_207)"
                strokeOpacity="0.82"
                strokeWidth="10"
                mask="url(#path-2-inside-1_1_207)"
            />
            <defs>
                <radialGradient
                    id="paint0_angular_1_207"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(19 23.5) rotate(-5.19442) scale(16.568)"
                >
                    <stop offset="0.037037" stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="0.822423" stopColor="white" />
                </radialGradient>
            </defs>
        </svg>
    );
}
