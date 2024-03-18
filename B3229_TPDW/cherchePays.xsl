<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method = "html"/>
    <xsl:param name="code"/>

<xsl:template match = "/">
<html>
    <body>
        
        <element_a_recuperer>
            <ul>
                <xsl:apply-templates select = "//country[country_codes/cca2 = $code]"/>
            </ul>
        </element_a_recuperer>
    </body>
</html>
</xsl:template>


<xsl:template match = "country">
    <LI>
        <xsl:value-of select = "country_name/common_name"/>
        <br/>
        <xsl:value-of select = "./capital"/>
    </LI>
</xsl:template>
</xsl:stylesheet>