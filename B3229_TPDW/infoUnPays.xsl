<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:param name="countryName"/>
	
	<xsl:template match="/">
		<html>	
            <element_a_recuperer>
                <xsl:apply-templates select="//country/[country_name/common_name = $countryName]"/>
            </element_a_recuperer>
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
                <td> <xsl:valueof select = "./country_name/common_name"/> </td>
                <td> <xsl:valueof select = "./captial"/> </td>
                <td> <xsl:valueof select = "./country_name/common_name"/> </td>
                <td> <xsl:valueof select = "./country_name/common_name"/> </td>
            </tr>
        </table>
	</xsl:template>
</xsl:stylesheet>
