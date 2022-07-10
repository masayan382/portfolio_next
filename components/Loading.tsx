import { css, keyframes } from "@mui/styled-engine"

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const loadingWrapper = css`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #000;
`

const loadingText = css`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #999;
    width: 100px;
    height: 30px;
    margin: -7px 0 0 -45px;
    text-align: center;
    font-size: 20px;
`

const loadingContent = css`
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 170px;
    height: 170px;
    margin: -85px 0 0 -85px;
    border: 3px solid #f00;
    border: 3px solid transparent;
    border-top-color: #4d658d;
    border-bottom-color: #4d658d;
    border-radius: 50%;
    animation: ${loader} 2s linear infinite;
    &:after {
        content: "";
        position: absolute;
        border: 3px solid #0f0;
        left: 15px;
        right: 15px;
        top: 15px;
        bottom: 15px;
        border: 3px solid transparent;
        border-top-color: #84417c;
        border-bottom-color: #84417c;
        border-radius: 50%;
        animation: ${loader} 1.5s linear infinite;
    }
    &:before {
        content: "";
        position: absolute;
        border: 3px solid #00f;
        left: 5px;
        right: 5px;
        top: 5px;
        bottom: 5px;
        border: 3px solid transparent;
        border-top-color: #d4cc6a;
        border-bottom-color: #d4cc6a;
        border-radius: 50%;
        animation: ${loader} 3s linear infinite;
    }
`

const Loading = () => {
    return (
        <div id="loading-wrapper" css={loadingWrapper}>
            <div id="loading-text" css={loadingText}>
                LOADING
            </div>
            <div id="loading-content" css={loadingContent}></div>
        </div>
    )
}

export default Loading
