<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/> 

<xsl:template match="/texte/the_header"> 
<html> 
 <head> 
 	<title> 
 		<xsl:value-of select="/texte/the_header/title"/> 
 	</title> 
 </head> 
<table  align="center" cellspacing="50">
<tbody>
	<tr>
		<td><img src="../images/prince.png"/></td>
		<td> 
			<h1 style="text-align:center; color:blue;"><xsl:value-of select="/texte/the_header/title"/></h1> 
			<h2 style="text-align:center; font-style: italic"><xsl:value-of select="/texte/the_header/author"/></h2>
			<blockquote style="color: darkgreen;">
					But du TP du 01/05/201:
					<xsl:value-of select="/texte/the_header/styling_information/styling_description"/><br/>
					Auteurs:
					<xsl:for-each select="/texte/the_header/styling_information/styled_by">
						<xsl:value-of select="style_manager"/>
					</xsl:for-each>

					<br/>Email du responsable:
					text
			</blockquote>
		</td>
	</tr>
</tbody>
</table>
 <hr/>
</html> 
</xsl:template>





</xsl:stylesheet>