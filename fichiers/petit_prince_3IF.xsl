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
	<body>

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
							<xsl:text>(</xsl:text> <xsl:value-of select="//NoBinome"/> <xsl:text>)</xsl:text>

							<br/>Email du responsable:
							text
					</blockquote>
				</td>
			</tr>
		</tbody>
	</table>
	<hr/>
	<xsl:apply-templates select="//body"/>
	</body>
	</html> 
	</xsl:template>

	<xsl:template match="//body">
			<h3> Début du texte : </h3>
			<xsl:apply-templates select="./paragraph"/>
	</xsl:template>

	<xsl:template match="//paragraph">
		<div style="margin: 15px 0">
			<p style="margin: 0 0">
				<xsl:for-each select="phrase[@language = 'francais']">
					<xsl:value-of select="."/>
				</xsl:for-each>
			</p>
			<p style="font-style: italic; color: brown; margin: 0 0">
				<xsl:for-each select="phrase[@language = 'hongrois']">
					<xsl:value-of select="."/>
				</xsl:for-each>
			</p>
		</div>
	</xsl:template>

<xsl:template match="//paragraph[@type = 'dialogue']">
    <table style="border: 1px solid black; width: 100%">
        <tr>
            <xsl:for-each select="phrase">
                <td style="border: 1px solid black; padding: 5px;">
                    <xsl:value-of select="."/>
                </td>
            </xsl:for-each>
        </tr>
    </table>
</xsl:template>





	</xsl:stylesheet>