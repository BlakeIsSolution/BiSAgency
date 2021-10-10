<?php
/**
 * PHPMailer - PHP email creation and transport class.
 * PHP Version 5.4
 * @package PHPMailer
 * @link https://github.com/PHPMailer/PHPMailer/ The PHPMailer GitHub project

 * @license http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License
 * @note This program is distributed in the hope that it will be useful - WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.
 */

/**
 * PHPMailerOAuthGoogle - Wrapper for League OAuth2 Google provider.
 * @package PHPMailer
* @link https://github.com/thephpleague/oauth2-client
 */
class PHPMailerOAuthGoogle
{
    private $oauthUserEmail = '';
    private $oauthRefreshToken = '';
    private $oauthClientId = '';
    private $oauthClientSecret = '';

    /**
     * @param string $UserEmail
     * @param string $ClientSecret
     * @param string $ClientId
     * @param string $RefreshToken
     */
    public function __construct(
        $UserEmail,
        $ClientSecret,
        $ClientId,
        $RefreshToken
    ) {
        $this->oauthClientId = $ClientId;
        $this->oauthClientSecret = $ClientSecret;
        $this->oauthRefreshToken = $RefreshToken;
        $this->oauthUserEmail = $UserEmail;
    }

    private function getProvider()
    {
        return new League\OAuth2\Client\Provider\Google([
            'clientId' => $this->oauthClientId,
            'clientSecret' => $this->oauthClientSecret
        ]);
    }

    private function getGrant()
    {
        return new \League\OAuth2\Client\Grant\RefreshToken();
    }

    private function getToken()
    {
        $provider = $this->getProvider();
        $grant = $this->getGrant();
        return $provider->getAccessToken($grant, ['refresh_token' => $this->oauthRefreshToken]);
    }

    public function getOauth64()
    {
        $token = $this->getToken();
        return base64_encode("user=" . $this->oauthUserEmail . "\001auth=Bearer " . $token . "\001\001");
    }
}
