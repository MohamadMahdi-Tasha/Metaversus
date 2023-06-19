// Codes By Mahdi Tasha
// Declaring types of prop
interface propsType {type: string;}

// Creating and exporting functional component of Icons in top, as default
export default function IconComponent({type}:propsType):any {
    // Conditional Rendering
    if (type === 'search') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        );
    } else if (type === 'menu') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 18.005C22 18.555 21.554 19 21.005 19H12.995C12.7311 19 12.478 18.8952 12.2914 18.7086C12.1048 18.522 12 18.2689 12 18.005C12 17.7411 12.1048 17.488 12.2914 17.3014C12.478 17.1148 12.7311 17.01 12.995 17.01H21.005C21.555 17.01 22 17.455 22 18.005ZM22 12C22 12.55 21.554 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12C2 11.7361 2.10483 11.483 2.29143 11.2964C2.47803 11.1098 2.73111 11.005 2.995 11.005H21.005C21.555 11.005 22 11.451 22 12ZM21.005 6.99C21.2689 6.99 21.522 6.88517 21.7086 6.69857C21.8952 6.51197 22 6.25889 22 5.995C22 5.73111 21.8952 5.47803 21.7086 5.29143C21.522 5.10483 21.2689 5 21.005 5H8.995C8.86433 5 8.73495 5.02574 8.61423 5.07574C8.49351 5.12574 8.38382 5.19903 8.29143 5.29143C8.19903 5.38382 8.12574 5.49351 8.07574 5.61423C8.02574 5.73495 8 5.86433 8 5.995C8 6.12567 8.02574 6.25505 8.07574 6.37577C8.12574 6.49649 8.19903 6.60618 8.29143 6.69857C8.38382 6.79097 8.49351 6.86426 8.61423 6.91426C8.73495 6.96426 8.86433 6.99 8.995 6.99H21.005Z" fill="white"/>
            </svg>
        );
    } else if (type === 'reddit') {
        return (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_81)">
                    <path d="M25.418 12V12.03C25.418 12.573 25.262 13.08 24.993 13.509L25 13.497C24.7309 13.9336 24.346 14.2871 23.888 14.518L23.872 14.525C23.98 14.928 24.042 15.39 24.042 15.868V15.886V15.885C24.0347 17.3817 23.4968 18.8274 22.524 19.965L22.531 19.956C21.4444 21.2552 20.052 22.2641 18.479 22.892L18.41 22.916C16.775 23.602 14.875 24.001 12.881 24.001L12.728 24H12.736L12.59 24.001C10.599 24.001 8.70201 23.602 6.97301 22.88L7.06901 22.916C5.47815 22.2915 4.06848 21.2795 2.96801 19.972L2.95501 19.956C1.98653 18.8207 1.45155 17.3791 1.44501 15.887V15.88C1.44501 15.41 1.50101 14.952 1.60601 14.514L1.59801 14.554C1.12549 14.3236 0.725529 13.9676 0.442007 13.525L0.435007 13.514C0.146199 13.0627 -0.00655241 12.5377 -0.00499306 12.002C-0.00499306 11.225 0.309007 10.521 0.818007 10.011C1.07063 9.74818 1.37378 9.53919 1.70922 9.39656C2.04467 9.25393 2.40549 9.18059 2.77001 9.18095H2.82001H2.81701H2.85601C3.65501 9.18095 4.37501 9.52395 4.87501 10.07L4.87701 10.072C7.02722 8.59919 9.5669 7.79927 12.173 7.77395H12.181L13.827 0.383953C13.8556 0.26135 13.9314 0.154983 14.038 0.0879531L14.04 0.0869531C14.0934 0.0493934 14.1542 0.0236361 14.2184 0.0113942C14.2825 -0.000847621 14.3485 0.000706456 14.412 0.0159531L14.409 0.0149531L19.643 1.16395C19.817 0.810953 20.078 0.524953 20.4 0.325953L20.409 0.320953C20.728 0.120953 21.116 0.00195312 21.532 0.00195312C22.117 0.00195312 22.648 0.236953 23.033 0.618953C23.418 0.987953 23.657 1.50695 23.657 2.08195V2.11795V2.11595V2.14595C23.657 2.72395 23.418 3.24595 23.033 3.61795L23.032 3.61895C22.835 3.81722 22.6007 3.97446 22.3425 4.08157C22.0843 4.18868 21.8075 4.24353 21.528 4.24295C20.967 4.24345 20.4287 4.02158 20.031 3.62595C19.8355 3.43623 19.6801 3.20912 19.5741 2.95813C19.4681 2.70714 19.4137 2.4374 19.414 2.16495V2.12695V2.12895L14.676 1.07895L13.201 7.77295C15.948 7.79295 18.494 8.63795 20.608 10.073L20.561 10.043C20.8235 9.76904 21.1389 9.55117 21.4879 9.4025C21.837 9.25383 22.2126 9.17744 22.592 9.17795C23.372 9.17795 24.078 9.49495 24.589 10.008C25.098 10.504 25.414 11.197 25.414 11.963V12.002V12H25.418ZM5.92901 14.822V14.854C5.92901 15.43 6.16501 15.951 6.54601 16.325C6.73495 16.5226 6.96203 16.6797 7.21351 16.787C7.46498 16.8943 7.73561 16.9494 8.00901 16.949H8.04501H8.04301C8.60723 16.9484 9.14818 16.7241 9.54714 16.3251C9.94611 15.9261 10.1705 15.3852 10.171 14.821V14.787C10.171 14.212 9.93201 13.693 9.54701 13.325L9.54601 13.324C9.35432 13.1283 9.12543 12.9729 8.87282 12.8669C8.6202 12.7609 8.34895 12.7066 8.07501 12.707H8.04101H8.04301C7.48397 12.7117 6.94914 12.9357 6.55373 13.331C6.15832 13.7262 5.93397 14.2609 5.92901 14.82V14.821V14.822ZM17.418 19.858C17.4675 19.8101 17.5069 19.7528 17.5339 19.6894C17.5608 19.626 17.5746 19.5578 17.5746 19.489C17.5746 19.4201 17.5608 19.3519 17.5339 19.2885C17.5069 19.2251 17.4675 19.1678 17.418 19.12C17.3735 19.0748 17.3204 19.0389 17.2618 19.0145C17.2033 18.9901 17.1404 18.9777 17.077 18.978H17.063H17.064H17.056C16.922 18.9778 16.793 19.0285 16.695 19.12C16.2211 19.5614 15.6352 19.8644 15.001 19.996L14.978 20C13.4667 20.3831 11.883 20.3783 10.374 19.986L10.438 20C9.79377 19.8709 9.198 19.5655 8.71701 19.118L8.71901 19.12C8.62116 19.0284 8.49204 18.9776 8.35801 18.978H8.33901C8.27559 18.9778 8.21278 18.9903 8.15424 19.0147C8.09569 19.0391 8.04258 19.0748 7.99801 19.12C7.9478 19.1638 7.90755 19.2179 7.87996 19.2787C7.85236 19.3394 7.83806 19.4053 7.83801 19.472V19.486C7.83801 19.632 7.89901 19.764 7.99801 19.858C8.46699 20.2997 9.03166 20.6273 9.64801 20.815L9.67801 20.823C10.2263 21.022 10.7947 21.1608 11.373 21.237L11.416 21.242C11.86 21.2846 12.29 21.306 12.706 21.306C13.122 21.306 13.552 21.2846 13.996 21.242C14.609 21.1629 15.2113 21.0164 15.792 20.805L15.734 20.824C16.3632 20.6375 16.9402 20.3068 17.419 19.858L17.417 19.86L17.418 19.858ZM17.376 16.95H17.41C17.985 16.95 18.504 16.711 18.872 16.326L18.873 16.325C19.254 15.951 19.49 15.43 19.49 14.854V14.82V14.822C19.4853 14.2629 19.2612 13.7281 18.866 13.3327C18.4708 12.9373 17.936 12.7129 17.377 12.708H17.344C16.768 12.708 16.247 12.944 15.873 13.325C15.6754 13.5139 15.5182 13.741 15.411 13.9925C15.3037 14.2439 15.2486 14.5146 15.249 14.788V14.824V14.822C15.2495 15.3862 15.4739 15.9271 15.8729 16.3261C16.2718 16.7251 16.8128 16.9494 17.377 16.95H17.376Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_81">
                        <rect width="25" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (type === 'discord') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_83)">
                    <path d="M20.317 4.49197C18.787 3.80197 17.147 3.29197 15.432 3.00197C15.4167 2.99904 15.4009 3.00093 15.3868 3.00738C15.3726 3.01383 15.3608 3.02452 15.353 3.03797C15.143 3.40697 14.909 3.88797 14.745 4.26797C12.9261 3.99621 11.0769 3.99621 9.25799 4.26797C9.07533 3.84683 8.86934 3.4362 8.64099 3.03797C8.63325 3.02436 8.62154 3.01342 8.60743 3.00663C8.59331 2.99984 8.57746 2.99752 8.56199 2.99997C6.84799 3.28997 5.20799 3.79997 3.67699 4.49097C3.66382 4.4965 3.65265 4.50592 3.64499 4.51797C0.532992 9.09297 -0.320008 13.555 0.0989923 17.961C0.100158 17.9718 0.103508 17.9822 0.108837 17.9917C0.114167 18.0011 0.121364 18.0094 0.129992 18.016C1.94638 19.3384 3.97233 20.3458 6.12299 20.996C6.13798 21.0006 6.15402 21.0006 6.16901 20.9959C6.18399 20.9913 6.19723 20.9823 6.20699 20.97C6.66979 20.351 7.07989 19.6944 7.43299 19.007C7.43789 18.9976 7.44072 18.9872 7.44127 18.9766C7.44183 18.9661 7.44011 18.9555 7.43622 18.9456C7.43233 18.9358 7.42637 18.9268 7.41874 18.9195C7.41111 18.9121 7.40199 18.9065 7.39199 18.903C6.746 18.6597 6.12008 18.3661 5.51999 18.025C5.50921 18.0188 5.50012 18.0101 5.49355 17.9995C5.48698 17.989 5.48312 17.977 5.48233 17.9646C5.48153 17.9522 5.48383 17.9398 5.48901 17.9286C5.49418 17.9173 5.50208 17.9075 5.51199 17.9C5.63799 17.807 5.76399 17.71 5.88399 17.613C5.89479 17.6043 5.9078 17.5987 5.92158 17.5969C5.93535 17.5952 5.94934 17.5973 5.96199 17.603C9.88899 19.367 14.142 19.367 18.023 17.603C18.0357 17.5969 18.0498 17.5946 18.0638 17.5961C18.0778 17.5977 18.091 17.6032 18.102 17.612C18.222 17.71 18.347 17.807 18.474 17.9C18.484 17.9073 18.492 17.917 18.4974 17.9282C18.5027 17.9394 18.5052 17.9517 18.5046 17.9641C18.504 17.9765 18.5004 17.9885 18.494 17.9991C18.4876 18.0098 18.4787 18.0186 18.468 18.025C17.87 18.369 17.248 18.66 16.595 18.902C16.585 18.9056 16.5758 18.9114 16.5682 18.9188C16.5606 18.9263 16.5546 18.9353 16.5507 18.9452C16.5468 18.9551 16.5451 18.9658 16.5457 18.9764C16.5463 18.9871 16.5491 18.9975 16.554 19.007C16.914 19.694 17.326 20.348 17.779 20.969C17.7884 20.9817 17.8015 20.9912 17.8166 20.9963C17.8316 21.0013 17.8478 21.0015 17.863 20.997C20.0173 20.3486 22.0466 19.3407 23.865 18.016C23.8739 18.0098 23.8813 18.0017 23.8868 17.9924C23.8923 17.9831 23.8958 17.9727 23.897 17.962C24.397 12.868 23.059 8.44197 20.348 4.51997C20.3413 4.50723 20.3303 4.49729 20.317 4.49197ZM8.01999 15.278C6.83799 15.278 5.86299 14.209 5.86299 12.898C5.86299 11.586 6.81899 10.518 8.01999 10.518C9.22999 10.518 10.196 11.595 10.177 12.898C10.177 14.21 9.22099 15.278 8.01999 15.278ZM15.995 15.278C14.812 15.278 13.838 14.209 13.838 12.898C13.838 11.586 14.793 10.518 15.995 10.518C17.205 10.518 18.171 11.595 18.152 12.898C18.152 14.21 17.206 15.278 15.995 15.278Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_83">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (type === 'twitter') {
        return (
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6425 2.93708C22.8075 3.30708 21.9105 3.55708 20.9675 3.67008C21.9405 3.08787 22.6685 2.17154 23.0155 1.09208C22.1014 1.63507 21.1009 2.01727 20.0575 2.22208C19.3559 1.47294 18.4266 0.976403 17.4138 0.809551C16.4011 0.642699 15.3616 0.814868 14.4568 1.29933C13.5519 1.78379 12.8323 2.55344 12.4097 3.48878C11.9871 4.42412 11.8851 5.47283 12.1195 6.47208C10.2672 6.37907 8.45515 5.89763 6.80095 5.05898C5.14674 4.22034 3.68736 3.04324 2.51752 1.60408C2.11752 2.29408 1.88752 3.09408 1.88752 3.94608C1.88708 4.71307 2.07596 5.46832 2.4374 6.14481C2.79885 6.8213 3.32168 7.39812 3.95952 7.82408C3.2198 7.80054 2.4964 7.60066 1.84952 7.24108V7.30108C1.84945 8.37682 2.22156 9.41945 2.90271 10.2521C3.58386 11.0847 4.53209 11.656 5.58652 11.8691C4.90031 12.0548 4.18086 12.0821 3.48252 11.9491C3.78002 12.8747 4.35952 13.6841 5.13989 14.264C5.92026 14.8439 6.86244 15.1653 7.83452 15.1831C6.18436 16.4785 4.14641 17.1812 2.04852 17.1781C1.6769 17.1782 1.3056 17.1565 0.936523 17.1131C3.066 18.4823 5.54486 19.2089 8.07652 19.2061C16.6465 19.2061 21.3315 12.1081 21.3315 5.95208C21.3315 5.75208 21.3265 5.55008 21.3175 5.35008C22.2288 4.69105 23.0154 3.87497 23.6405 2.94008L23.6425 2.93708Z" fill="#F1F5F8"/>
            </svg>
        );
    } else if (type === 'instagram') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 6.87579C8.2798 6.87579 6.8759 8.2797 6.8759 10C6.8759 11.7203 8.2798 13.1242 10.0001 13.1242C11.7204 13.1242 13.1243 11.7203 13.1243 10C13.1243 8.2797 11.7204 6.87579 10.0001 6.87579ZM19.3704 10C19.3704 8.70626 19.3822 7.42423 19.3095 6.13282C19.2368 4.63282 18.8947 3.30157 17.7978 2.2047C16.6986 1.10548 15.3697 0.765638 13.8697 0.692982C12.5759 0.620326 11.2939 0.632045 10.0025 0.632045C8.70871 0.632045 7.42668 0.620326 6.13527 0.692982C4.63527 0.765638 3.30402 1.10783 2.20714 2.2047C1.10792 3.30392 0.76808 4.63282 0.695424 6.13282C0.622767 7.42657 0.634486 8.7086 0.634486 10C0.634486 11.2914 0.622767 12.5758 0.695424 13.8672C0.76808 15.3672 1.11027 16.6984 2.20714 17.7953C3.30636 18.8945 4.63527 19.2344 6.13527 19.307C7.42902 19.3797 8.71105 19.368 10.0025 19.368C11.2962 19.368 12.5782 19.3797 13.8697 19.307C15.3697 19.2344 16.7009 18.8922 17.7978 17.7953C18.897 16.6961 19.2368 15.3672 19.3095 13.8672C19.3845 12.5758 19.3704 11.2938 19.3704 10ZM10.0001 14.807C7.33996 14.807 5.19308 12.6602 5.19308 10C5.19308 7.33985 7.33996 5.19298 10.0001 5.19298C12.6603 5.19298 14.8072 7.33985 14.8072 10C14.8072 12.6602 12.6603 14.807 10.0001 14.807ZM15.004 6.11876C14.3829 6.11876 13.8814 5.6172 13.8814 4.99611C13.8814 4.37501 14.3829 3.87345 15.004 3.87345C15.6251 3.87345 16.1267 4.37501 16.1267 4.99611C16.1269 5.14359 16.098 5.28966 16.0416 5.42595C15.9853 5.56224 15.9026 5.68607 15.7983 5.79036C15.694 5.89464 15.5702 5.97733 15.4339 6.03368C15.2976 6.09003 15.1515 6.11895 15.004 6.11876Z" fill="#F1F5F8"/>
            </svg>
        );
    } else if (type === 'arrow-down') {
        return (
            <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99931 0C10.2645 0 10.5189 0.105357 10.7064 0.292893C10.894 0.48043 10.9993 0.734784 10.9993 1V24.586L17.2913 18.292C17.4791 18.1042 17.7338 17.9987 17.9993 17.9987C18.2649 17.9987 18.5195 18.1042 18.7073 18.292C18.8951 18.4798 19.0006 18.7344 19.0006 19C19.0006 19.2656 18.8951 19.5202 18.7073 19.708L10.7073 27.708C10.6144 27.8011 10.5041 27.875 10.3826 27.9254C10.2611 27.9758 10.1308 28.0018 9.99931 28.0018C9.86777 28.0018 9.73753 27.9758 9.61604 27.9254C9.49455 27.875 9.3842 27.8011 9.29131 27.708L1.29131 19.708C1.10354 19.5202 0.998047 19.2656 0.998047 19C0.998047 18.7344 1.10354 18.4798 1.29131 18.292C1.47908 18.1042 1.73376 17.9987 1.99931 17.9987C2.26486 17.9987 2.51954 18.1042 2.70731 18.292L8.99931 24.586V1C8.99931 0.734784 9.10467 0.48043 9.2922 0.292893C9.47974 0.105357 9.73409 0 9.99931 0Z" fill="white"/>
            </svg>
        );
    } else if (type === 'vr') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_3529)">
                    <path d="M11.9996 1.872C14.7851 1.872 17.2886 2.8335 18.9746 4.563C20.3619 4.74342 21.6706 5.30994 22.7516 6.198C20.8601 2.223 16.9421 0 11.9996 0C7.12463 0 3.17963 2.22 1.26562 6.183C2.25673 5.37407 3.43901 4.83329 4.69913 4.6125C6.35363 2.808 8.96063 1.872 11.9996 1.872Z" fill="white"/>
                    <path d="M18.0004 18C16.4396 18.0018 14.9399 17.3935 13.8214 16.305L13.8184 16.302C13.6891 16.2049 13.5504 16.1209 13.4044 16.0515C12.9647 15.8474 12.485 15.7444 12.0004 15.75C11.3794 15.75 10.9069 15.9045 10.5979 16.0515C10.4513 16.1209 10.3121 16.2048 10.1824 16.302L10.1794 16.305C9.47408 16.9897 8.61138 17.4906 7.66713 17.7637C6.72287 18.0369 5.72597 18.0738 4.76409 17.8713C3.80221 17.6689 2.9048 17.2332 2.15078 16.6026C1.39676 15.9719 0.809212 15.1657 0.43981 14.2548C0.0704071 13.3439 -0.0695399 12.3562 0.0322737 11.3785C0.134087 10.4009 0.474543 9.46317 1.02371 8.64791C1.57287 7.83266 2.31392 7.16482 3.18169 6.7031C4.04947 6.24139 5.01739 5.99994 6.00035 6H18.0004C19.5917 6 21.1178 6.63214 22.243 7.75736C23.3682 8.88258 24.0004 10.4087 24.0004 12C24.0004 13.5913 23.3682 15.1174 22.243 16.2426C21.1178 17.3679 19.5917 18 18.0004 18Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_3529">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (type === 'image') {
        return (
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.69 0.0498188C16.66 0.729819 13.86 1.49982 10 1.49982C6.11004 1.49982 3.05004 0.659819 1.31004 0.0698188C1.15996 0.0192549 0.999959 0.00532139 0.843396 0.0291813C0.686833 0.0530412 0.538248 0.114002 0.410041 0.206977C0.281834 0.299951 0.177724 0.422242 0.106401 0.563643C0.0350777 0.705044 -0.00139033 0.861454 4.05371e-05 1.01982V14.9998C4.05371e-05 15.6798 0.66004 16.1698 1.31004 15.9498C3.36004 15.2598 6.10004 14.4998 10 14.4998C13.87 14.4998 16.66 15.2598 18.69 15.9498C18.8401 15.999 18.9997 16.0119 19.1557 15.9874C19.3117 15.963 19.4597 15.9019 19.5875 15.8092C19.7154 15.7165 19.8194 15.5948 19.8911 15.4541C19.9628 15.3134 20.0001 15.1577 20 14.9998V0.999819C20 0.319819 19.34 -0.160181 18.69 0.0498188ZM10 10.9998C7.66004 10.9998 5.48004 11.1498 3.48004 11.4098L7.17004 6.98982L9.17004 9.38982L12 5.99982L16.51 11.3998C14.52 11.1498 12.3 10.9998 10 10.9998V10.9998Z" fill="white"/>
            </svg>
        );
    } else if (type === 'vr-fill') {
        return (
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9996 1.872C14.7851 1.872 17.2886 2.8335 18.9746 4.563C20.3619 4.74342 21.6706 5.30994 22.7516 6.198C20.8601 2.223 16.9421 0 11.9996 0C7.12463 0 3.17963 2.22 1.26562 6.183C2.25673 5.37407 3.43901 4.83329 4.69913 4.6125C6.35363 2.808 8.96063 1.872 11.9996 1.872Z" fill="white"/>
                <path d="M18.0004 18C16.4396 18.0018 14.9399 17.3935 13.8214 16.305L13.8184 16.302C13.6891 16.2049 13.5504 16.1209 13.4044 16.0515C12.9647 15.8474 12.485 15.7444 12.0004 15.75C11.3794 15.75 10.9069 15.9045 10.5979 16.0515C10.4513 16.1209 10.3121 16.2048 10.1824 16.302L10.1794 16.305C9.47408 16.9897 8.61138 17.4906 7.66713 17.7637C6.72287 18.0369 5.72597 18.0738 4.76409 17.8713C3.80221 17.6689 2.9048 17.2332 2.15078 16.6026C1.39676 15.9719 0.809212 15.1657 0.43981 14.2548C0.0704071 13.3439 -0.0695399 12.3562 0.0322737 11.3785C0.134087 10.4009 0.474543 9.46317 1.02371 8.64791C1.57287 7.83266 2.31392 7.16482 3.18169 6.7031C4.04947 6.24139 5.01739 5.99994 6.00035 6H18.0004C19.5917 6 21.1178 6.63214 22.243 7.75736C23.3682 8.88258 24.0004 10.4087 24.0004 12C24.0004 13.5913 23.3682 15.1174 22.243 16.2426C21.1178 17.3679 19.5917 18 18.0004 18Z" fill="white"/>
            </svg>
        );
    } else if (type === 'mouse') {
        return (
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00043 5C7.73521 5 7.48086 5.10536 7.29332 5.29289C7.10578 5.48043 7.00043 5.73478 7.00043 6V10C7.00043 10.2652 7.10578 10.5196 7.29332 10.7071C7.48086 10.8946 7.73521 11 8.00043 11C8.26564 11 8.52 10.8946 8.70753 10.7071C8.89507 10.5196 9.00043 10.2652 9.00043 10V6C9.00043 5.73478 8.89507 5.48043 8.70753 5.29289C8.52 5.10536 8.26564 5 8.00043 5Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000427246 8C0.000427246 5.87827 0.843282 3.84344 2.34357 2.34315C3.84386 0.842855 5.8787 0 8.00043 0C10.1222 0 12.157 0.842855 13.6573 2.34315C15.1576 3.84344 16.0004 5.87827 16.0004 8V16C16.0004 18.1217 15.1576 20.1566 13.6573 21.6569C12.157 23.1571 10.1222 24 8.00043 24C5.8787 24 3.84386 23.1571 2.34357 21.6569C0.843282 20.1566 0.000427246 18.1217 0.000427246 16V8ZM14.0004 8V16C14.0004 17.5913 13.3683 19.1174 12.2431 20.2426C11.1179 21.3679 9.59173 22 8.00043 22C6.40913 22 4.88301 21.3679 3.75779 20.2426C2.63257 19.1174 2.00043 17.5913 2.00043 16V8C2.00043 6.4087 2.63257 4.88258 3.75779 3.75736C4.88301 2.63214 6.40913 2 8.00043 2C9.59173 2 11.1179 2.63214 12.2431 3.75736C13.3683 4.88258 14.0004 6.4087 14.0004 8V8Z" fill="white"/>
            </svg>
        );
    }
}