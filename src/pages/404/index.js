import React from 'react'
import Head from 'layout/head'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
const Message = styled.div`
	width: 320px;
	border: 2px solid #333;
	padding: 30px 40px;
  border-radius: 2px;
	text-align: center;
	margin-bottom: 70px;
  margin-top: 70px;
`

export default ({location}) => (
	<Container>
	  <Head
	    url="https://www.ballot.fyi/404/"
	    title="Oh nooo! 404 Error page - ballot.fyi"
	    headline="You found our error page!"
	    description="This is an error page. That is all."
		/>
		<Message>
			<h1>Dang it.</h1>
			We 404'd up. We tried to get you to <em>https://www.bythebay.cool{location.pathname}</em> but there was an error. (Sorry!) You can probably find what you’re looking for if you hit our logo (on the top left). If you end up back on this page, then we're so, so, so sorry. <br/><br/>If it's an emergency, send us a text at <em>(415) 617-5970</em> or shoot us an email at hi@bythebay.cool.
		</Message>
	</Container>
)
