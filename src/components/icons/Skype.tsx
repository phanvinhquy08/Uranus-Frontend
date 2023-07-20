export default function Skype({
  classNames,
  width = 25,
  height = 24,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.037 18.8747C9.014 18.8747 7.217 16.8957 7.217 15.4107C7.20638 15.057 7.34455 14.715 7.59792 14.4679C7.85128 14.2208 8.19663 14.0913 8.55 14.1107C10.273 14.1107 9.823 16.5877 13.037 16.5877C14.678 16.5877 15.587 15.6927 15.587 14.7767C15.587 14.2257 15.318 13.6167 14.233 13.3477L10.657 12.4527C7.777 11.7287 7.257 10.1667 7.257 8.70174C7.257 5.65474 10.118 4.51074 12.806 4.51074C15.277 4.51074 18.199 5.88374 18.199 7.71074C18.1799 8.07138 18.0135 8.40833 17.7388 8.64276C17.4641 8.8772 17.1052 8.98854 16.746 8.95074C15.277 8.95074 15.546 6.91374 12.582 6.91374C11.113 6.91374 10.29 7.57774 10.29 8.53074C10.29 9.48374 11.443 9.78874 12.447 10.0177L15.084 10.6047C17.975 11.2537 18.708 12.9507 18.708 14.5487C18.708 17.0247 16.808 18.8727 12.986 18.8727L13.037 18.8747ZM24.068 13.9937L24.039 14.1287L23.995 13.8887C24.01 13.9337 24.039 13.9627 24.054 14.0087C24.1744 13.3313 24.2349 12.6447 24.235 11.9567C24.235 8.94957 23.0385 6.06545 20.9094 3.94107C19.876 2.91118 18.6557 2.08769 17.314 1.51468C15.9588 0.885475 14.48 0.567702 12.986 0.584687C12.267 0.58383 11.5495 0.650794 10.843 0.784688L10.962 0.844688L10.723 0.815688L10.842 0.790688C8.21787 -0.599022 4.99226 -0.0975223 2.91393 2.0233C0.8356 4.14412 0.399475 7.37922 1.842 9.97469L1.868 9.85069L1.909 10.0897L1.849 9.97469C1.73473 10.6201 1.67718 11.2743 1.677 11.9297C1.67552 13.4469 1.97618 14.9481 2.56141 16.3467C3.12045 17.6997 3.94564 18.9267 4.988 19.9547C6.01894 20.9937 7.24148 21.8229 8.588 22.3967C10.5988 23.2555 12.8175 23.5055 14.969 23.1157L14.85 23.0537L15.09 23.0997L14.955 23.1297C17.0296 24.3029 19.5716 24.2845 21.629 23.0814C23.6864 21.8783 24.949 19.672 24.944 17.2887C24.9399 16.1455 24.6464 15.0219 24.091 14.0227"
        fill="#2C3038"
      />
    </svg>
  );
}
