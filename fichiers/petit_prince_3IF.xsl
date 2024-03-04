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
			<td>
				<img>
					<xsl:attribute name="src">
						<xsl:text>../</xsl:text>
						<xsl:value-of select="/texte/the_header/cover/@path"/>
					</xsl:attribute>
				</img>
			</td>
			<td> 
				<h1 style="text-align:center; color:blue;"><xsl:value-of select="/texte/the_header/title"/></h1> 
				<h2 style="text-align:center; font-style: italic"><xsl:value-of select="/texte/the_header/author"/></h2>
				<blockquote style="color: darkgreen;">
						But du TP du 01/05/201:
						<xsl:value-of select="/texte/the_header/styling_information/styling_description"/><br/>
						Auteurs:
						<xsl:for-each select="/texte/the_header/styling_information/styled_by/style_manager">
							<xsl:value-of select="."/>
							<xsl:text> </xsl:text>
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

<xsl:template match="//paragraph/@narration">
	<xsl:if test="@language = 'francais'">
		<xsl:apply-template match="//phrase[@language ='francais']">
</xsl:template>

<xsl:template match="//phrase[@language ='hongrois']">
		<span style="font-style: italic; color: brown;">
			<xsl:value-of select="."/>
		</span>
	</xsl:template>






</xsl:stylesheet>