window.videoIdCount=100,window.youtubeRegexPattern=/(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[^&\s\?]+(?!\S))\/)|(?:\S*v=|v\/)))([^&\s\?]+)/.source,window.fetchVideo=async t=>{const e=await fetch(`https://www.youtube.com/get_video_info?video_id=${t}`,{headers:{origin:"https://www.youtube.com"}}),i=await e.text(),o=new URLSearchParams(i).get("player_response"),{videoDetails:n}=JSON.parse(o);return{id:window.videoIdCount++,videoId:t,url:"https://www.youtube.com/watch?v="+t,title:n.title,channel:n.author,thumbnailUrl:"https://i.ytimg.com/vi/"+t+"/default.jpg"}},window.parseYoutubeId=t=>{const e=RegExp(window.youtubeRegexPattern,"i").exec(t);return e&&e.length>1?e[1]:null},window.generatePlaylist=async t=>{const e=await window.generatePlaylistId(),i=new Date;return{id:e,title:i.toLocaleString(),videos:t,timestamp:i.getTime()}},window.openPlaylistEditor=t=>{history.pushState({playlist:t},"","#/editor"),window.dispatchEvent(new Event("hashchange"))};
