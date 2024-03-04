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
	   <div align="center">
		<img>
		<xsl:attribute name="src">
			<xsl:text>../</xsl:text>
			<xsl:value-of select="//cover/@path"/>	
		</xsl:attribute>
		</img>
	</div>
	   </td>
		<td> 
			<h1 style="text-align:center; color:blue;"><xsl:value-of select="/texte/the_header/title"/></h1> 
			<h2 style="text-align:center; font-style: italic"><xsl:value-of select="/texte/the_header/author"/></h2>
			<blockquote style="color: darkgreen;">
					But du TP du 01/05/201:
					<xsl:value-of select="/texte/the_header/styling_information/styling_description"/><br/>
					Auteurs:
					<xsl:for-each select="//style_manager">
					<span><xsl:value-of select="."/> </span>
						
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

<xsl:template match="body">
	<h3>Début du texte:</h3>
	<xsl:for-each select= "//paragraph[@type = 'narration']">
	    <p>
			<xsl:for-each select="phrase"> 
			<xsl:choose>
			<xsl:when test= "@language = 'francais'">
			<span>
			<xsl:value-of select="."/>  
			</span>
			
			</xsl:when>
			
			
			<xsl:otherwise>
			<xsl:if test=". = @language = 'hongrois'[0]">
			<br/>
			</xsl:if>
			<span style="color:red;">
			<xsl:value-of select="."/>
			</span>
			</xsl:otherwise>

			</xsl:choose>
			</xsl:for-each>
		</p>
		
	</xsl:for-each>

</xsl:template>





</xsl:stylesheet>