<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:param name="code"/>
	
	<xsl:template match="/">
		<html>	
            <body>
                <element_a_recuperer>
                    <!-- On sélectionne unqiuement le pays dont le code correspond au code donné en paramètre -->
                    <xsl:apply-templates select="//country[country_codes/cca2 = $code]"/>
                </element_a_recuperer>
            </body>
		</html>
	</xsl:template>

	<xsl:template match="country">
        <!-- On crée un tableau qui contiendra les données recherchés et qui sera directement utilisé -->
        <table style="border-collapse: collapse; width: 100%; border: 1px solid black;">
            <thead style="border-bottom: 1px solid black;">
                <tr id = "ColumnName">
                    <th style="border: 1px solid black; padding: 8px;"> Name </th>
                    <th style="border: 1px solid black; padding: 8px;"> Captial </th>
                    <th style="border: 1px solid black; padding: 8px;"> Languages Spoken </th>
                    <th style="border: 1px solid black; padding: 8px;"> Flag </th>
                </tr>
            </thead>
            <tbody>
                <tr style="border: 1px solid black;" id = "ColumnData">
                    <!-- On prend le nom du pays -->
                    <td style="border: 1px solid black; padding: 8px;"> <xsl:value-of select = "./country_name/common_name"/> </td>
                    <!-- On prend la capitale du pays -->
                    <td style="border: 1px solid black; padding: 8px;"> <xsl:value-of select = "./capital"/> </td>
                    <!-- On boucle pour prendre toutes les langues parlés dans le pays -->
                    <td style="border: 1px solid black; padding: 8px;"> 
                        <xsl:for-each select = "./languages/*">
                        <xsl:value-of select = "."/><br/>
                        </xsl:for-each>
                    </td>
                    <td style="border: 1px solid black; padding: 8px;"> <xsl:value-of select = "./country_name/common_name"/> </td>
                </tr>
            </tbody>
        </table>
	</xsl:template>
</xsl:stylesheet>
