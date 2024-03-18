<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>



<xsl:template match = "/">
<html>
    <head>
        <title>
            <xsl:value-of select="/texte/the_header/title"/>
        </title>
    </head>

    <body style="background-color:white;"> 
        <table align="center" cellspacing="50">
            <tr>
                <td>
                    <div align="center">
                    <img>
                    <xsl:attribute name="src">
                    ./../<xsl:value-of select="//cover/@path"/>
                    </xsl:attribute>
                    </img>
                    </div>
                </td>
                <td>
                    <h1 style="text-align:center; color:blue;">
                        <xsl:value-of select="/texte/the_header/title"/>
                    </h1> 

                    <h2 style="text-align:center; font-style: italic">
                        <xsl:value-of select="/texte/the_header/author"/>
                    </h2>

                    <blockquote style="color:darkgreen;">
                        But du TP du 01/05/2024:
                        <xsl:value-of select = "/texte/the_header/styling_information/styling_description"/><br/>
                        Auteurs: <br/>
                        <xsl:for-each select="//style_manager">
                            <xsl:value-of select ="."/><br/>
                        </xsl:for-each>
                        Email du responsable:
                        <mail> text </mail>
                    </blockquote>
                </td>
            </tr>
        </table>
        <hr/>
        <xsl:apply-templates select = "//body"/>
        </body> 
</html> 
</xsl:template>





<xsl:template match="texte/body">
<h3> Debut du texte: </h3>


<xsl:for-each select = "*">
    <xsl:apply-templates select = "."/>
</xsl:for-each>

<h4> Fin du texte. </h4>
<hr/>
</xsl:template>



<xsl:template match="paragraph[@type = 'dialogue']">
<table align="center" width="90%">
         <tr>
            <td width="45%">
               <table border="1" cellpadding="10" width="100%">
                  
                    <xsl:for-each select = "phrase[@language = 'francais']">
                        <tr>    
                            <td width="50">
                                <img src="./../images/{@speaker}.png">
                                    <xsl:attribute name = "title">
                                    <xsl:value-of select= "@speaker"/>
                                    </xsl:attribute>
                                </img>
                            </td>
                            <td>
                            <xsl:apply-templates select = "."/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </td>
            <td/>
            <td width="45%">
               <table border="1" cellpadding="10" width="100%">

                    <xsl:for-each select = "phrase[@language = 'hongrois']">
                        <tr>
                            <td width="50">
                                <img src="./../images/{@speaker}.png">
                                    <xsl:attribute name = "title">
                                    <xsl:value-of select= "@speaker"/>
                                    </xsl:attribute>
                                </img>
                            </td>
                            <td>
                                <xsl:apply-templates select = "."/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </td>
        </tr>
    </table>





</xsl:template>


<xsl:template match = "phrase">
<xsl:choose>
        <xsl:when test = "@language = 'francais'">

            <xsl:choose>
            <xsl:when test = ".[contains(., 'mouton')]">
                <span style="font-size: 24; font-weight: bold;">
                    <xsl:value-of select = "."/>
                    <img src="./../images/moutonDessin.png" title="Mouton"/>
                </span>
            </xsl:when>

            <xsl:otherwise>
                <span style="">
                    <xsl:value-of select = "."/>
                </span>
            </xsl:otherwise>
            </xsl:choose>


        <xsl:if test = "following-sibling::phrase[1][@language = 'hongrois']">
            <br/>
        </xsl:if>
        </xsl:when>

        <xsl:otherwise>
        <span style="font-style: italic; color: brown;">
            <xsl:value-of select = "."/>
        </span>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>




<xsl:template match = "paragraph[@type = 'narration']">
<p>
   <xsl:apply-templates select = "./*"/>     
</p>
</xsl:template>



<xsl:template match = "image">
    <div style="text-align: center;">
        <img>
            <xsl:attribute name ="src">
                ./../<xsl:value-of select = "@path"/>
            </xsl:attribute>
        </img>
    </div>
</xsl:template>




</xsl:stylesheet>