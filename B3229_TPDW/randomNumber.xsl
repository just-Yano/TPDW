<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:param name="random_number" />

	
	<xsl:template match="/">
		<HTML>
			<BODY bgcolor="#FFFFCC">
				<H1>Bibliographie</H1>
				<element_a_recuperer>
						<!-- On sélectionne uniquement le pays dont la position correspond au nombre tiré au hasard -->
						<xsl:apply-templates select="//country[position() = $random_number]"/>
				
				</element_a_recuperer>
			</BODY>
		</HTML>
	</xsl:template>
	<xsl:template match="country">
			<!-- On prend la velur du nom dy pays uniquement -->
			<xsl:value-of select="./country_name/common_name"/>
  		
	</xsl:template>
</xsl:stylesheet>
