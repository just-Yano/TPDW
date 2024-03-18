<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:param name="random_number" />

	
	<xsl:template match="/">
		<HTML>
			<BODY bgcolor="#FFFFCC">
				<H1>Bibliographie</H1>
				<element_a_recuperer>
					<ul><!-- on cherche les références bibliographiques dont la balise contient la valeur du paramètre-->
						<xsl:apply-templates select="//country[position = $random_number]"/>
					</ul>
				</element_a_recuperer>
			</BODY>
		</HTML>
	</xsl:template>
	<xsl:template match="country">
		<LI>
			<xsl:value-of select="./country_name/common_name"/>:
    			 
  		</LI>
	</xsl:template>
</xsl:stylesheet>
