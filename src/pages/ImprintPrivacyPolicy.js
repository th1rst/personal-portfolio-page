import React from "react";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { LanguageContext } from "../components/Multilanguage/LanguageProvider";

export default function ImprintPrivacyPolicy() {
  const { userLanguage } = React.useContext(LanguageContext);
  const { theme } = React.useContext(ThemeContext);
  const address1 = process.env.REACT_APP_ADDRESS_1;
  const address2 = process.env.REACT_APP_ADDRESS_2;

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    w-screen min-h-screen`}
    >
      <h1 className="text-3xl font-bold underline text-center">
        <Text tid="imprintPrivacyPolicy" />
      </h1>
      <div className="flex justify-center">
        <div className="mt-4 w-2/3 h-auto text-justify">
          {userLanguage === "english" ? (
            <>
              <h1 className="text-2xl text-center font-bold mb-10">
                Privacy Policy for Kochannek.com
              </h1>
              <p>
                At Kochannek.com, one of our main priorities is the privacy of
                our visitors. This Privacy Policy document contains types of
                information that is collected and recorded by Kochannek.com and
                how we use it.
              </p>
              <br />
              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>
              <p>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in Kochannek.com.
                This policy is not applicable to any information collected
                offline or via channels other than this website.
              </p>
              <h2 className="mt-4 text-xl text-center font-bold">Consent</h2>
              <h2 className="font-bold">Information we collect</h2>
              <p>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information.
                <br />
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
                <br />
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number.
              </p>
              <h2 className="font-bold mt-6">Log Files</h2>
              <p>
                Kochannek.com follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users'
                movement on the website, and gathering demographic information.
              </p>
              <h2 className="font-bold mt-6">
                Advertising Partners Privacy Policies
              </h2>
              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of Kochannek.com.
                <br />
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on
                Kochannek.com, which are sent directly to users' browser. They
                automatically receive your IP address when this occurs. These
                technologies are used to measure the effectiveness of their
                advertising campaigns and/or to personalize the advertising
                content that you see on websites that you visit.
                <br />
                Note that Kochannek.com has no access to or control over these
                cookies that are used by third-party advertisers.
              </p>
              <h2 className="font-bold mt-6">Third Party Privacy Policies</h2>
              <p>
                Kochannek.com's Privacy Policy does not apply to other
                advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options. <br />
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.
              </p>
              <h2 className="font-bold mt-6">
                CCPA Privacy Rights (Do Not Sell My Personal Information)
              </h2>
              <p>
                Under the CCPA, among other rights, California consumers have
                the right to:
                <br />
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
                <br />
                Request that a business delete any personal data about the
                consumer that a business has collected.
                <br />
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
                <br />
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <h2 className="font-bold mt-6">GDPR Data Protection Rights</h2>
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
                <br />
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
                <br />
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
                <br />
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
                <br />
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions.
                <br />
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions.
                <br />
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
                <br />
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <h2 className="font-bold mt-6">Children's Information</h2>
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
                <br />
                Kochannek.com does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </p>
              <h2 className="font-bold mt-6">Inquiries</h2>
              <p className="mb-20">
                Any inquiries shall be sent to Marco Kochannek, {address1},{" "}
                {address2}.
                <br />
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl text-center font-bold mb-10">
                Datenschutzerklärung
              </h1>
              <h1 className="text-2xl text-center font-bold mb-10">
                1. Datenschutz auf einen Blick
              </h1>
              <h2 className="mt-4 text-xl text-center font-bold">
                Allgemeine Hinweise
              </h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h2 className="mt-4 text-xl text-center font-bold">
                Datenerfassung auf dieser Website
              </h2>
              <h2 className="font-bold">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </h2>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie weiter unten
                dem Impressum dieser Website entnehmen.
              </p>
              <h2 className="font-bold mt-6">Wie erfassen wir Ihre Daten?</h2>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
                <br />
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeitdes Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </p>
              <h2 className="font-bold mt-6">Wofür nutzen wir Ihre Daten?</h2>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <h2 className="font-bold mt-6">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                <br />
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
                sich jederzeit unter der im Impressum angegebenen Adresse an uns
                wenden.
              </p>
              <h1 className="text-2xl text-center font-bold my-10">
                2. Hosting und Content Delivery Networks (CDN)
              </h1>
              <h2 className="font-bold mt-6">Externes Hosting</h2>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert.
                Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta-
                und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
                <br />
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen undbestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                <br />
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
                zur Erfüllung seiner Leistungspflichten erforderlich ist und
                unsere Weisungen in Bezug auf diese Daten befolgen.
                <br />
                Wir setzen folgenden Hoster ein:
                <br />
                <br />
                domainfactory GmbH
                <br />
                Oskar-Messter-Str. 3385737
                <br />
                Ismaning
                <br />
                Deutschland
              </p>
              <h2 className="font-bold mt-6">
                Abschluss eines Vertrages über Auftragsverarbeitung
              </h2>
              <p>
                Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben
                wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster
                geschlossen.
              </p>
              <h1 className="text-2xl text-center font-bold my-10">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h1>
              <h2 className="font-bold mt-6">Datenschutz</h2>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                <br />
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können. Die
                vorliegende Datenschutzerklärung erläutert, welche Daten wir
                erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                welchem Zweck das geschieht.
                <br />
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
                B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                Dritte ist nicht möglich.
              </p>
              <h2 className="font-bold mt-6">
                Hinweis zur verantwortlichen Stelle
              </h2>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
                <br />
                <br />
                Marco Kochannek, {address1}, {address2}. <br />
                <br />
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              <h2 className="font-bold mt-6">Speicherdauer</h2>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keinen anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben (z.B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>
              <h2 className="font-bold mt-6">
                Hinweis zur Datenweitergabe in die USA
              </h2>
              <p>
                Auf unserer Website sind unter anderem Tools von Unternehmen mit
                Sitz in den USA eingebunden. Wenn diese Tools aktiv sind, können
                Ihre personenbezogenen Daten an die US-Server der jeweiligen
                Unternehmen weitergegeben werden. Wir weisen darauf hin, dass
                die USA kein sicherer Drittstaat im Sinne des
                EU-Datenschutzrechts sind. US-Unternehmen sind dazu
                verpflichtet, personenbezogene Daten an Sicherheitsbehörden
                herauszugeben, ohne dass Sie als Betroffener hiergegen
                gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen
                werden, dass US-Behörden (z.B. Geheimdienste) Ihre auf
                US-Servern befindlichen Daten zu Überwachungszwecken
                verarbeiten, auswerten und dauerhaft speichern. Wir haben auf
                diese Verarbeitungstätigkeiten keinen Einfluss.
              </p>
              <h2 className="font-bold mt-6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h2>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können einebereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>
              <h2 className="font-bold mt-6">
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                sowie gegenDirektwerbung (Art. 21 DSGVO)
              </h2>
              <p>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
                DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN
                GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
                EINE VERARBEITUNG BERUHT,ENTNEHMEN SIE DIESER
                DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
                IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN,
                ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                VERARBEITUNGNACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VONRECHTSANSPRÜCHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                <br />
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
              </p>
              <h2 className="font-bold mt-6">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h2>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>
              <h2 className="font-bold mt-6">Recht auf Datenübertragbarkeit</h2>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
              <h2 className="font-bold mt-6">SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers
                von„http://“ auf „https://“ wechselt und an dem Schloss-Symbol
                in Ihrer Browserzeile.
                <br />
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
              </p>
              <h2 className="font-bold mt-6">
                Auskunft, Löschung und Berichtigung
              </h2>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit unter der im Impressum angegebenen Adresse an uns
                wenden.
              </p>
              <h2 className="font-bold mt-6">
                Recht auf Einschränkung der Verarbeitung
              </h2>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit unter der im Impressum angegebenen Adresse an uns
                wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                folgenden Fällen:
              </p>
              <ul>
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, benötigen wir in der Regel
                  Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                  Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                  die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                  Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                  von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                  Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                  haben, muss eine Abwägung zwischen Ihren und unseren
                  Interessen vorgenommen werden. Solange noch nicht feststeht,
                  wessen Interessenüberwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Datenzu
                  verlangen.
                </li>
              </ul>
              <br />
              <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
                abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
              </p>
              <h1 className="text-2xl text-center font-bold my-10">
                4. Datenerfassung auf dieser Website
              </h1>
              <h2 className="font-bold mt-6">Server-Log-Dateien</h2>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
                <br />
                <ul>
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <br />
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen.
                <br />
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
                1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der
                Optimierung seiner Website –hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>
              <h2 className="font-bold mt-6">Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
                <br />
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde.
                <br />
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt(z. B. nach abgeschlossener Bearbeitung
                Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –insbesondere
                Aufbewahrungsfristen – bleiben unberührt.
              </p>
              <h1 className="text-2xl text-center font-bold my-10">
                5. Plugins und Tools
              </h1>
              <h2 className="font-bold mt-6">
                Google Web Fonts (lokales Hosting)
              </h2>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                so genannte Web Fonts, die von Google bereitgestellt werden. Die
                Google Fonts sind lokal installiert. Eine Verbindung zu Servern
                von Google findet dabei nicht statt.
                <br />
                <br />
                Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://developers.google.com/fonts/faq"
                  rel="noopener noreferrer"
                >
                  https://developers.google.com/fonts/faq
                </a>{" "}
                und in der Datenschutzerklärung von Google:{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://policies.google.com/privacy?hl=de"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
              <h2 className="font-bold mt-6">Font Awesome</h2>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                und Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6
                Porter Road Apartment 3R, Cambridge, Massachusetts, USA.
                <br />
                Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in
                ihren Browsercache, um Texte, Schriftarten und Symbole korrekt
                anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete
                Browser Verbindung zuden Servern von Font Awesome aufnehmen.
                Hierdurch erlangt Font Awesome Kenntnis darüber, dass über Ihre
                IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Font
                Awesome erfolgt auf Grundlage vonArt. 6 Abs. 1 lit. f DSGVO. Wir
                haben ein berechtigtes Interesse an der einheitlichen
                Darstellung des Schriftbildes auf unserer Website. Sofern eine
                entsprechende Einwilligung abgefragt wurde (z. B. eine
                Einwilligung zur Speicherung von Cookies), erfolgt die
                Verarbeitung ausschließlich auf Grundlage von Art. 6Abs. 1 lit.
                a DSGVO; die Einwilligung ist jederzeit widerrufbar.
                <br />
                Wenn Ihr Browser Font Awesome nicht unterstützt, wird eine
                Standardschrift von Ihrem Computer genutzt.
                <br />
                Weitere Informationen zu Font Awesome finden Sie und in der
                Datenschutzerklärung von Font Awesome unter:{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://fontawesome.com/privacy"
                  rel="noopener noreferrer"
                >
                  https://fontawesome.com/privacy
                </a>
                .
              </p>
              <h2 className="font-bold mt-6">Google reCAPTCHA</h2>
              <p>
                Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf
                dieser Website. Anbieter ist die Google Ireland Limited
                („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                <br />
                Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf
                dieser Website (z. B. in einem Kontaktformular) durch einen
                Menschen oder durch ein automatisiertes Programm erfolgt.
                Hierzuanalysiert reCAPTCHA das Verhalten des Websitebesuchers
                anhand verschiedener Merkmale. Diese Analyse beginnt
                automatisch, sobald der Websitebesucher die Website betritt. Zur
                Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B.
                IP-Adresse, Verweildauer des Websitebesuchers auf der Website
                oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse
                erfassten Daten werden an Google weitergeleitet.
                <br />
                Die reCAPTCHA-Analysen laufen vollständig im Hintergrund.
                Websitebesucher werden nicht darauf hingewiesen, dass eine
                Analyse stattfindet. Die Speicherung und Analyse der Daten
                erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse daran, seine
                Webangebote vor missbräuchlicher automatisierter Ausspähung und
                vor SPAM zu schützen. Sofern eine entsprechende Einwilligung
                abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
                jederzeit widerrufbar.
                <br />
                Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
                Google-Datenschutzbestimmungen und den Google
                Nutzungsbedingungen unter folgenden Links:
                <br />
                <a
                  className="text-blue-500 underline"
                  href="https://policies.google.com/privacy?hl=de"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                <br />
                und
                <br />
                <a
                  className="text-blue-500 underline"
                  href="https://policies.google.com/terms?hl=de"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/terms?hl=de
                </a>
                .
              </p>
              <h2 className="font-bold mt-6">Impressum</h2>
              <p className="mb-12">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
                <br />
                <br />
                Marco Kochannek, {address1}, {address2}. <br />
                <br />
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
