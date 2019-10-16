import styled from 'styled-components'

export const Section = styled.div`
  font-family: -apple-system-body, Helvetica Neue, Helvetica, 'Helvetica-bd', sans-serif;
  font-weight: bold;
  color: #fff;
  font-size: 13pt;
  font-weight: normal;
  max-width: 360px;
  margin: 40px auto;
  div {
	  max-width: 200px;
	  word-wrap: break-word;
	  margin-bottom: 10px;
	  line-height: 22px;
  }
`;
export const Clear = styled.div`
  clear: both;
`;
export const FromMe = styled.div`
  position: relative;
  padding: 10px 20px;
  color: white;
  background: #0B93F6;
  border-radius: 25px;
  float: right;
	&:before {
	  content: "";
	  position: absolute;
	  bottom: -2px;
	  right: -7px;
	  height: 20px;
	  border-right: 20px solid #0B93F6;
	  border-bottom-left-radius: 16px 14px;
	  transform: translate(0, -2px);
	}
	&:after {
	  content: "";
	  position: absolute;
	  z-index: 1;
	  bottom: -2px;
	  right: -56px;
	  width: 26px;
	  height: 20px;
	  background: white;
	  border-bottom-left-radius: 10px;
	  transform: translate(-30px, -2px);
	}
`;
export const FromThem = styled.div`
  position: relative;
  padding: 10px 20px;
  background: #E5E5EA;
  border-radius: 25px;
  color: black;
  float: left;
	&:before {
	  content: "";
	  position: absolute;
	  z-index: 2;
	  bottom: -2px;
	  left: -7px;
	  height: 20px;
	  border-left: 20px solid #E5E5EA;
	  border-bottom-right-radius: 16px 14px;
	  transform: translate(0, -2px);
	}
	&:after {
	  content: "";
	  position: absolute;
	  z-index: 3;
	  bottom: -2px;
	  left: 4px;
	  width: 26px;
	  height: 20px;
	  background: white;
	  border-bottom-right-radius: 10px;
	  transform: translate(-30px, -2px);
	}
`;
export const FromThemEmoji = FromThem.extend`
	background: none;
	&:before {
		border-left: none;
	}
`;

export const EmojiLg = styled.span`
	font-size:50pt;
	line-height: 55pt;
`;
