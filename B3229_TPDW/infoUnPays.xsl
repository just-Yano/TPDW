<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:param name="code"/>
	
	<xsl:template match="/">
		<html>	
            <body>
                <element_a_recuperer>
                    <xsl:apply-templates select="//country[country_codes/cca2 = $code]"/>
                </element_a_recuperer>
            </body>
		</html>
	</xsl:template>

	<xsl:template match="country">
		<table style = "border: 1px solid black">
            <tr>
                <th> Name </th>
                <th> Captial </th>
                <th> Languages Spoken </th>
                <th> Flag </th>
            </tr>
            <tr>
                <td> <xsl:value-of select = "./country_name/common_name"/> </td>
                <td> <xsl:value-of select = "./capital"/> </td>
                <td>
                    <xsl:for-each select = "./languages/*">
                    <xsl:value-of select = "."/><br/>
                    </xsl:for-each>
                </td>
                <td> <xsl:value-of select = "./country_name/common_name"/> </td>
            </tr>
        </table>
	</xsl:template>
</xsl:stylesheet>
