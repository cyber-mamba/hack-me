import React from "react";

const LeftImageAndDescription = () => {
    return(
        <td rowSpan={2}><img src="http://localhost:3001/upload/c.png" width="100%" height="100%" alt="あなたの画像" style={{ border: "0"}} /><br/><br/>
        <table width="256">
          <tbody>
            <tr>
              <td width="14"> </td>
              <td width="230">阿部 寛（あべ ひろし）</td>
            </tr>
            <tr>
              <td> </td>
              <td>生年月日 1964年6月22日<br/></td>
            </tr>
            <tr>
              <td> </td>
              <td>血液型 A型<br/></td>
            </tr>
            <tr>
              <td> </td>
              <td><a href="p.htm">プロフィール</a></td>
            </tr>
            <tr>
              <td colSpan={2}><br/> If you have any enquiries regarding my TV drama or film, or would like to make an enquiry concerning future projects, please do not hesitate to contact me through the following email address.<br/> <br/> mail:<a href="mailto:shigeta@navy.plala.or.jp" target="_blank">shigeta@navy.plala.or.jp</a></td>
            </tr>
          </tbody>
        </table> <br/>所属<b>:</b><br/>茂田オフィス<br/>107-0052<br/>東京都港区赤坂9-5-29 <br/>赤坂ロイヤルマンション303<br/>TEL :+81-3-5410-8585<br/>FAX :+81-3-5410-0588 </td>
    );
};

export default LeftImageAndDescription;