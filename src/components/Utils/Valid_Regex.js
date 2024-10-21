export const Email_regex = (value) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|ymail|rediffmail|hotmail|outlook|aol|icloud|protonmail|example)\.(com|co\.in|in|net|org|edu|gov|uk|us|info|biz|io|...)[a-zA-Z]{0,}$/;
  return emailRegex.test(value);
};

export const Name_regex = (value) => {
  const nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(value);
};

export const Stg_regex = (value) => {
  const StgRegex = /^[a-zA-Z ]+$/;
  return StgRegex.test(value);
};

export const Mobile_regex = (value) => {
  const MobileRegex = /^[0-9]{10}$/;
  return MobileRegex.test(value);
};
export const Password_Rejex = (value) => {
  const password = /^.{4,20}$/;
  return password.test(value);
};

export const No_Negetive_Input_regex = (mobile) => {
  const value = /^(?!0*(\.0*)?$)\d+(\.\d+)?$/;
  return value.test(mobile);
};

export const ValidYoutubeUrl = (url) => {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[\w-]+(&[\w%=]*)?$/;
  return youtubeRegex.test(url);
};

export const Image_Regexp = (value)=>{
  if(value?.type){
    return  ["image/jpeg", "image/jpg", "image/png"].includes(value?.type);
  }else {
    let val = value?.split(".").pop().toLowerCase(); 
        return ["jpeg", "jpg", "png"].includes(val);
  }
  
}

export const Remove_Special_Character = (values)=>{
  const value = values.replace(/[^a-zA-Z0-9]/g, "")
  return value
}

export const Remove_Space_Character = (values)=>{
let modifiedString = values.replace(/\s+/g, '');
let resultArray = modifiedString.split(''); 
return resultArray[0]
}

export const validApkFile = (file)=>{

  if (file instanceof File) {
    return /\.apk$/i.test(file.name);
  }
  if (typeof file === 'string') {
    return /\.apk$/i.test(file);
  }
  return false;
}


export const  convertTo12HourFormat = (time)=> {
  let [hours, minutes] = time.split(':');
  hours = parseInt(hours, 10);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 
  return `${hours}:${minutes} ${ampm}`;
}


