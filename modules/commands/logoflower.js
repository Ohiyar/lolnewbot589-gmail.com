var _0x92e9=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x62\x6F\x74\x63\x61\x68\x78\x2E\x62\x69\x7A\x2E\x69\x64\x2F\x61\x70\x69\x2F\x70\x68\x6F\x74\x6F\x6F\x78\x79\x2F\x66\x6C\x6F\x77\x65\x72\x2D\x74\x79\x70\x6F\x67\x72\x61\x70\x68\x79\x3F\x61\x70\x69\x6B\x65\x79\x3D\x41\x64\x6D\x69\x6E\x26\x74\x65\x78\x74\x3D","\x63\x6F\x6E\x66\x69\x67","\x65\x78\x70\x6F\x72\x74\x73","\x6C\x6F\x67\x6F\x66\x6C\x6F\x77\x65\x72","\x31\x2E\x30\x2E\x30","\x4D\x52\x20\x43\x48\x41\x4E\x44","\x20\x6C\x6F\x67\x6F","\x74\x65\x78\x74\x20\x6D\x61\x6B\x65\x72","\x2E\x2E\x2E","\x72\x75\x6E","\x61\x78\x69\x6F\x73","\x66\x73\x2D\x65\x78\x74\x72\x61","\x71\x75\x65\x72\x79\x73\x74\x72\x69\x6E\x67","\x20","\x6A\x6F\x69\x6E","\x74\x79\x70\x65","\x6D\x65\x73\x73\x61\x67\x65\x5F\x72\x65\x70\x6C\x79","\x75\x72\x6C","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x73","\x6D\x65\x73\x73\x61\x67\x65\x52\x65\x70\x6C\x79","\x2F\x63\x61\x63\x68\x65\x2F\x62\x61\x6E\x6E\x65\x72\x2E\x70\x6E\x67","\u2764\uFE0F\x20\x4A\x55\x53\x54\x20\x57\x41\x49\x54\x20\x31\x30\x20\x53\x45\x43\x4F\x4E\x44\x53\x20\u2764\uFE0F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x64\x61\x74\x61","\x70\x61\x72\x73\x65","\u0110\xE3\x20\x78\u1EA3\x79\x20\x72\x61\x20\x6C\u1ED7\x69\x20","\x65\x72\x72\x6F\x72","\x6D\x65\x73\x73\x61\x67\x65","","\x63\x61\x74\x63\x68","\x66\x72\x6F\x6D","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\u2705\x20\x4d\x41\x44\x45\x20\x42\x59\x20\x41\x41\x44\x49\x20\x47\x55\x50\x54\x41\x20\u2705","\x63\x72\x65\x61\x74\x65\x52\x65\x61\x64\x53\x74\x72\x65\x61\x6D","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x74\x68\x65\x6E","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74"];const API=_0x92e9[0];module[_0x92e9[2]][_0x92e9[1]]= {name:_0x92e9[3],version:_0x92e9[4],hasPermssion:0,credits:_0x92e9[5],description:_0x92e9[6],commandCategory:_0x92e9[7],usages:_0x92e9[8],cooldowns:10};module[_0x92e9[2]][_0x92e9[9]]= async function({api,event,args}){const axios=require(_0x92e9[10]);const fs=require(_0x92e9[11]);const qs=require(_0x92e9[12]);tukhoa= args[_0x92e9[14]](_0x92e9[13]);(event[_0x92e9[15]]== _0x92e9[16])?tukhoa= event[_0x92e9[19]][_0x92e9[18]][0][_0x92e9[17]]:tukhoa= args[_0x92e9[14]](_0x92e9[13]);const pathsave=__dirname+ `${_0x92e9[20]}`;let imageBuffer;api[_0x92e9[24]](_0x92e9[21],event[_0x92e9[22]],event[_0x92e9[23]]);axios[_0x92e9[40]](`${_0x92e9[31]}${API}${_0x92e9[31]}${encodeURI(tukhoa)}${_0x92e9[31]}`,{responseType:_0x92e9[39]})[_0x92e9[38]]((data)=>{const imageBuffer=data[_0x92e9[26]];fs[_0x92e9[34]](pathsave,Buffer[_0x92e9[33]](imageBuffer));api[_0x92e9[24]]({body:_0x92e9[35],attachment:fs[_0x92e9[36]](pathsave)},event[_0x92e9[22]],()=>{return fs[_0x92e9[37]](pathsave)},event[_0x92e9[23]])})[_0x92e9[32]]((error)=>{let err;if(error[_0x92e9[25]]){err= JSON[_0x92e9[27]](error[_0x92e9[25]][_0x92e9[26]].toString())}else {err= error};return api[_0x92e9[24]](`${_0x92e9[28]}${err[_0x92e9[29]]}${_0x92e9[13]}${err[_0x92e9[30]]}${_0x92e9[31]}`,event[_0x92e9[22]],event[_0x92e9[23]])})}